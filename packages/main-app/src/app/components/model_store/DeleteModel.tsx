// Import packages
import { Button, Heading, Input } from '@canvass/components';
import {
  Box,
  Container,
  Flex,
  FormControl,
  FormLabel,
  useToast,
} from '@chakra-ui/react';
import axios, { AxiosRequestConfig } from 'axios';
import { UserContext } from '../../../context/UserContext';
import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { API } from '../../api/config';
import './Form.css';
import ErrorMessage from '../auth/ErrorMessage';

function DeleteModel() {
  const [token] = useContext(UserContext);
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [id, setId] = useState<number>(0);
  const navigate = useNavigate();
  const toast = useToast();

  // Redirect to login if token is not defined
  useEffect(() => {
    if (!token) {
      navigate('/login');
    }
  }, [token, navigate]);

  // Return null if token is not defined
  if (!token) {
    return null;
  }

  // Handle change for input field
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    const intValue = parseInt(value, 10);
    setId(intValue);
  };

  // Handle delete request
  const handleDelete = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const requestOptions: AxiosRequestConfig = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    };

    try {
      // Make delete request to API
      await axios.delete(`${API}/model/api/${id}`, requestOptions);

      toast({
        title: 'Model Deleted',
        description: `Deleted Model ID: ${id}`,
        status: 'success',
        duration: 5000,
        isClosable: true,
      });

      setErrorMessage('');
    } catch (error: any) {
      // Handle errors from delete request
      setErrorMessage(error.response?.data.detail);
      toast({
        title: 'Error',
        description: error.response?.data.detail,
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    }
  };

  return (
    <Container maxW="2xl" centerContent>
      <Heading>Delete Model</Heading>

      <Box className="form" maxW="2xl" mx="auto" mt="8" width="100%">
        <form className="model-form" onSubmit={handleDelete}>
          <FormControl>
            <FormLabel>Model ID</FormLabel>
            <Input type="number" name="id" value={id} onChange={handleChange} />
          </FormControl>
          <FormControl>
            <Flex justifyContent="center" direction={'column'}>
              {/* Show error message if there is any */}
              <ErrorMessage message={errorMessage} />
              <Button type="submit" mt={4}>
                Delete
              </Button>
            </Flex>
          </FormControl>
        </form>
      </Box>
    </Container>
  );
}

export default DeleteModel;
