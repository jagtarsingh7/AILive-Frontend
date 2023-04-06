import { Heading } from '@canvass/components';
import { Container } from '@chakra-ui/react';
import ViewModel from '../card/ViewModel';
import { useLocation } from 'react-router-dom';
import { Model } from './types';
import { UserContext } from '../../../context/UserContext';
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  VStack,
} from '@chakra-ui/react';
import { useContext, useState } from 'react';
import axios, { AxiosRequestConfig } from 'axios';
import { API } from '../../api/config';
import '../card/ViewModel.css';

function GetModel() {
  const [token] = useContext(UserContext);
  const location = useLocation();
  const { from = null } = location.state || {};
  const [modelValue, setmodelValue] = useState<Model>({
    tags: '',
    id: 0,
    user_id: 0,
    custom_functions: {},
    pre_model_order: [],
    post_model_order: [],
    predict_function: '',
    storage_options: {},
    container_options: {},
    model_metadata: {},
    model_version: 0,
    input_features_and_types: {},
    output_names_and_types: {},
  });

  const [values, setValues] = useState<string | null>('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const fetchModel = () => {
      const config: AxiosRequestConfig = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      };

      axios.get(`${API}/api/models/${values}`, config).then((response) => {
        const { model } = response.data; // data has type MyData
        setmodelValue(model);
        if (model === null) {
          alert('This model number is not available');
        }
      });
    };
    fetchModel();
  };

  return (
    <Container maxW="2xl" centerContent>
      <Heading>Your Model details</Heading>
      {from === null ? (
        <>
          <Box mt={10}>
            <form onSubmit={handleSubmit}>
              <VStack spacing={4}>
                <FormControl>
                  <FormLabel htmlFor="modelNumber">Model Number</FormLabel>
                  <Input type="text" onChange={handleInputChange} />
                </FormControl>
                <Button type="submit" colorScheme="teal" size="lg">
                  Submit
                </Button>
              </VStack>
            </form>
          </Box>
          {modelValue === null || modelValue.id === 0 ? (
            <p>Please select model number</p>
          ) : (
            <ViewModel model={modelValue}></ViewModel>
          )}
        </>
      ) : (
        <ViewModel model={from}></ViewModel>
      )}
    </Container>
  );
}

export default GetModel;
