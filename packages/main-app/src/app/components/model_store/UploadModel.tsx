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
  const handleUpload = async (modelData: Model, file: File | null) => {
    // Set the request options with the token header
    const requestOptions: AxiosRequestConfig = {
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: `Bearer ${token}`,
      },
    };

    const url = `${API}/api/models?tags=${
      modelData.tags
    }&custom_functions=${JSON.stringify(
      modelData.custom_functions
    )}&predict_function=${
      modelData.predict_function
    }&storage_options=${JSON.stringify(
      modelData.storage_options
    )}&container_options=${JSON.stringify(
      modelData.container_options
    )}&model_metadata=${JSON.stringify(
      modelData.model_metadata
    )}&model_version=${
      modelData.model_version
    }&input_features_and_types=${JSON.stringify(
      modelData.input_features_and_types
    )}&output_names_and_types=${JSON.stringify(
      modelData.output_names_and_types
    )}`;

    const body = {
      file: file,
      pre_model_order: modelData.pre_model_order,
      post_model_order: modelData.post_model_order,
    };

    try {
      // Make the API call to create a new model
      const response = await axios.post(url, body, requestOptions);
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

  // Render the UploadModel component
  return (
    <Container maxW="2xl" centerContent>
      <Heading>Upload New Model</Heading>
      <Form
        onSubmit={(modelData: Model, file: File | null) =>
          handleUpload(modelData, file)
        }
      />
      {/* Show error message if there is any */}
      <ErrorMessage message={errorMessage} pb={5} />
    </Container>
  );
}

export default UploadModel;
