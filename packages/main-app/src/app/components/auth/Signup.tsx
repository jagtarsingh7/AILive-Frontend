// Import packages
import React, { useContext, useState } from 'react';
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Flex,
} from '@chakra-ui/react';
import './auth.css';
import { UserContext } from '../../../context/UserContext';
import axios, { AxiosRequestConfig } from 'axios';
import { useNavigate } from 'react-router-dom';
import ErrorMessage from './ErrorMessage';
import { API } from '../../api/config';

// Type for response body of API call to create new user
type ResponseBody = {
  access_token: string;
  token_type: string;
};

// Component for Register
const Signup: React.FC = () => {
  // Initializing state variables and retrieving setToken function from UserContext
  const [name, setName] = useState<string>('');
  const [organization, setOrganization] = useState<string>('');
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [, setToken] = useContext(UserContext);
  const navigate = useNavigate();

  // Handler functions for updating state variables when input values change
  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleOrganizationChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setOrganization(event.target.value);
  };

  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  // Function to make API call to create new user
  const createUser = async (requestOptions: AxiosRequestConfig) => {
    const data = {
      email: username,
      hashed_password: password,
      name: name,
      org: organization,
    };

    try {
      // API call to create new user
      const response = await axios.post<ResponseBody>(
        `${API}/auth/api/users`,
        data,
        requestOptions
      );

      // Update the user token and navigate to the homepage
      setToken(response.data.access_token);
      navigate('/');
    } catch (error: any) {
      // Set error message if there was an error creating the user
      setErrorMessage(error.response.data.detail);
    }
  };

  // Handle the submit functionality
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Request options for API call
    const requestOptions: AxiosRequestConfig = {
      headers: { 'Content-Type': 'application/json' },
    };

    if (password.length > 5) {
      createUser(requestOptions);
    } else {
      setErrorMessage('Password should be greater than 5 characters');
    }

    setName('');
    setOrganization('');
    setUsername('');
    setPassword('');
  };

  return (
    <Box className="form">
      {/* Form for User Register */}
      <form onSubmit={handleSubmit}>
        <FormControl>
          <FormLabel>Name</FormLabel>
          <Input type="text" value={name} onChange={handleNameChange} />
        </FormControl>
        <FormControl>
          <FormLabel>Organization</FormLabel>
          <Input
            type="text"
            value={organization}
            onChange={handleOrganizationChange}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Username</FormLabel>
          <Input type="text" value={username} onChange={handleUsernameChange} />
        </FormControl>
        <FormControl>
          <FormLabel>Password</FormLabel>
          <Input
            type="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </FormControl>

        <Flex justifyContent="center" direction={'column'}>
          {/* Show errpr if any while registering user */}
          <ErrorMessage message={errorMessage} />
          <Button type="submit" mt={4}>
            Sign Up
          </Button>
        </Flex>
      </form>
    </Box>
  );
};

export default Signup;
