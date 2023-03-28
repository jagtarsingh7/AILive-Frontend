// Import packages
import { Button, Heading, Input } from '@canvass/components';
import { Container, Flex, FormControl, FormLabel } from '@chakra-ui/react';
import axios, { AxiosRequestConfig } from 'axios';
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../../context/UserContext';
import ErrorMessage from './ErrorMessage';
import { API } from '../../api/config';
import './auth.css';

// Type for Response from API call
type ResponseBody = {
  access_token: string;
  token_type: string;
};

// Login component for auth
function Login() {
  // State variables for form and token using context
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [, setToken] = useContext(UserContext);
  const navigate = useNavigate();

  const loginUser = async (requestOptions: AxiosRequestConfig) => {
    const data = `grant_type=&username=${username}&password=${password}&scope=&client_id=&client_secret=`;

    try {
      // API call to generate token
      const response = await axios.post<ResponseBody>(
        `${API}/auth/api/token`,
        data,
        requestOptions
      );

      // Token being set in UserContext
      setToken(response.data.access_token);
      navigate('/');
    } catch (error: any) {
      setErrorMessage(error.response.data.detail);
    }
  };

  // Handler functions to set state variables
  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  // Handler for submitting the form
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Prevent the default form submission behavior
    const requestOptions: AxiosRequestConfig = {
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    };

    await loginUser(requestOptions); // Wait for the response before navigating

    setUsername('');
    setPassword('');
  };

  return (
    <Container maxW="2xl" centerContent className="form">
      <Heading>Welcome back! Login to continue...</Heading>

      <form onSubmit={handleSubmit}>
        {/* Form for user login */}
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
          {/* Show error message if any while user login */}
          <ErrorMessage message={errorMessage} />
          <Button type="submit" mt={4}>
            Login
          </Button>
        </Flex>
      </form>
    </Container>
  );
}

export default Login;
