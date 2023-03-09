import { Button, Text, Heading, Input } from '@canvass/components';
import { Box, Container, HStack } from '@chakra-ui/react';
import axios, { AxiosRequestConfig } from 'axios';
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../context/UserContext';
import ErrorMessage from './ErrorMessage';

type ResponseBody = {
  access_token: string;
  token_type: string;
};

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [, setToken] = useContext(UserContext);
  const navigate = useNavigate();

  const loginUser = async (requestOptions: AxiosRequestConfig) => {
    const data = `grant_type=&username=${username}&password=${password}&scope=&client_id=&client_secret=`;

    try {
      const response = await axios.post<ResponseBody>(
        'http://localhost:8000/auth/api/token',
        data,
        requestOptions
      );

      setToken(response.data.access_token);
      navigate('/');
    } catch (error: any) {
      setErrorMessage(error.response.data.detail);
    }
  };

  const handleSubmit = async () => {
    const requestOptions: AxiosRequestConfig = {
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    };

    loginUser(requestOptions);

    setUsername('');
    setPassword('');
  };

  return (
    <Container maxW="2xl" centerContent>
      <Heading>Welcome back! Login to continue...</Heading>
      <Box mt={4}>
        <HStack m={2}>
          <Text>Username: </Text>
          <Input
            type={'text'}
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
        </HStack>

        <HStack m={2}>
          <Text>Password: </Text>
          <Input
            type={'password'}
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </HStack>

        <HStack align="center" justify="center">
          <ErrorMessage message={errorMessage} />
        </HStack>

        <Button w="full" onClick={handleSubmit} mt={4}>
          Login
        </Button>
      </Box>
    </Container>
  );
}

export default Login;
