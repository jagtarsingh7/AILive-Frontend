// Import packages
import { Heading } from '@canvass/components';
import {
  Box,
  Container,
  FormControl,
  FormLabel,
  Input,
  useToast,
} from '@chakra-ui/react';
import axios, { AxiosRequestConfig } from 'axios';
import { UserContext } from '../../../context/UserContext';
import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { API } from '../../api/config';
import Form from './Form';
import { Model } from './types';
import './Form.css';
import ErrorMessage from '../auth/ErrorMessage';

// Define the UploadModel component
function UpdateModel() {
  // Get the token and set the response state
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

  // If the token is not defined, return null
  if (!token) {
    return null;
  }

  // Handle form for Model ID
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    const intValue = parseInt(value, 10);
    setId(intValue);
  };

  // Handle the update form submission
  const handleUpdate = async (modelData: Model) => {
    // Set the request options with the token header
    const requestOptions: AxiosRequestConfig = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    };

    try {
      // Make the API call to update existing model
      const response = await axios.patch(
        `${API}/api/models/${id}`,
        modelData,
        requestOptions
      );

      // Message Toast with the updated model version
      toast({
        title: 'Model Updated',
        description: `Updated Model Version: ${response.data.model_version}`,
        status: 'success',
        duration: 5000,
        isClosable: true,
      });
      setErrorMessage('');
      setId(0);
    } catch (error: any) {
      // Handle errors
      const errorMessage = error.message || 'Unknown error occurred';
      setErrorMessage(errorMessage);

      toast({
        title: 'Error',
        description: errorMessage,
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    }
  };

  // Render the UpdateModel component
  return (
    <Container maxW="2xl" centerContent>
      <Heading>Update Existing Model</Heading>
      <Box className="form" maxW="2xl" mx="auto" mt="8" width="100%">
        <form>
          <FormControl>
            <FormLabel>Model ID</FormLabel>
            <Input
              type="number"
              name="id"
              value={id}
              onChange={handleInputChange}
            />
          </FormControl>
        </form>
      </Box>
      <Form onSubmit={handleUpdate} />
      {/* Show error message if there is any */}
      <ErrorMessage message={errorMessage} pb={5} />
    </Container>
  );
}

export default UpdateModel;
