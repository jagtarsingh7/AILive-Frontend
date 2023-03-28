// Import packages
import { Heading } from '@canvass/components';
import { Container, useToast } from '@chakra-ui/react';
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
function UploadModel() {
  // Get the token and set the response state
  const [token] = useContext(UserContext);
  const [errorMessage, setErrorMessage] = useState<string>('');
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

  // Handle the upload form submission
  const handleUpload = async (modelData: Model) => {
    // Set the request options with the token header
    const requestOptions: AxiosRequestConfig = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    };

    try {
      // Make the API call to create a new model
      const response = await axios.post(
        `${API}/model/api`,
        modelData,
        requestOptions
      );
      // Message Toast with the newly created model ID
      toast({
        title: 'Model Created',
        description: `New Model ID: ${response.data.model_id}`,
        status: 'success',
        duration: 5000,
        isClosable: true,
      });
      setErrorMessage('');
    } catch (error: any) {
      // Handle errors
      setErrorMessage(error);
      toast({
        title: 'Error',
        description: error.response.data.message,
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    }
  };

  // Render the UploadModel component
  return (
    <Container maxW="2xl" centerContent>
      <Heading>Upload New Model</Heading>
      <Form onSubmit={handleUpload} />
      {/* Show error message if there is any */}
      <ErrorMessage message={errorMessage} />
    </Container>
  );
}

export default UploadModel;
