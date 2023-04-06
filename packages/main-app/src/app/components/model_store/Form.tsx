// Import packages
import React, { useState } from 'react';
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Textarea,
} from '@chakra-ui/react';
import ErrorMessage from '../auth/ErrorMessage';
import { Model } from './types';

// Define the props for the form
interface FormProps {
  onSubmit: (formData: Model) => void;
}

// Define the Form component
function Form(props: FormProps) {
  const initialFormState = {
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
  };

  // Setting the state variables for the form and needed fields
  const [formData, setFormData] = useState<Model>(initialFormState);
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [pre_model, setPreModel] = useState<string>('');
  const [post_model, setPostModel] = useState<string>('');
  const [customFunctionsInput, setCustomFunctionsInput] =
    useState<string>('{}');
  const [storageOptionInput, setStorageOptionInput] = useState<string>(
    '{"additionalProp1": "string"}'
  );
  const [containerOptionInput, setContainerOptionInput] = useState<string>(
    '{"additionalProp1": "string"}'
  );
  const [modelMetadataInput, setModelMetadataInput] = useState<string>('{}');
  const [inputFeaturesInput, setInputFeaturesInput] = useState<string>(
    '{"additionalProp1": "string"}'
  );
  const [outputNamesInput, setOutputNamesInput] = useState<string>(
    '{"additionalProp1": "string"}'
  );

  // Handle the change for fields
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  // Hanle the functionality for arrays
  const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    if (name === 'pre_model_order' || name === 'post_model_order') {
      const newValues = value.split(',').map((val) => val.trim());
      setFormData((prev) => ({
        ...prev,
        [name]: newValues,
      }));
      name === 'pre_model_order'
        ? setPreModel(newValues.join(', '))
        : setPostModel(newValues.join(', '));
    }
  };

  // Hanle the functionality for JSON objects
  const handleBlurObject = (event: React.FocusEvent<HTMLTextAreaElement>) => {
    const { name, value } = event.target;

    try {
      const parsedValue = JSON.parse(value);
      setErrorMessage('');
      setFormData((prevValues) => ({
        ...prevValues,
        [name]: parsedValue,
      }));
    } catch (error: any) {
      setErrorMessage(`Invalid ${name} JSON: ${error.message}`);
    }
  };

  // Handle the submit function for callback and resetting the form
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      await props.onSubmit(formData);
      setFormData(initialFormState);
      setCustomFunctionsInput('{}');
      setPreModel('');
      setPostModel('');
      setStorageOptionInput('{"additionalProp1": "string"}');
      setContainerOptionInput('{"additionalProp1": "string"}');
      setModelMetadataInput('{}');
      setInputFeaturesInput('{"additionalProp1": "string"}');
      setOutputNamesInput('{"additionalProp1": "string"}');
    } catch (error: any) {
      // Error handling in case of any errors
      setErrorMessage(`Error submitting form: ${error.message}`);
    }
  };

  // Render the Form component
  return (
    <Box className="form" maxW="2xl" mx="auto" mt="8" width="100%">
      <form className="model-form" onSubmit={handleSubmit}>
        <FormControl>
          <FormLabel>Tags</FormLabel>
          <Input
            type="text"
            name="tags"
            value={formData.tags}
            onChange={handleChange}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Custom Functions</FormLabel>
          <Textarea
            name="custom_functions"
            value={customFunctionsInput}
            onChange={(event) => setCustomFunctionsInput(event.target.value)}
            onBlur={handleBlurObject}
            readOnly={false}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Pre-model Order</FormLabel>
          <Input
            type="text"
            name="pre_model_order"
            value={pre_model}
            onChange={(event) => setPreModel(event.target.value)}
            onBlur={handleBlur}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Post-model Order</FormLabel>
          <Input
            type="text"
            name="post_model_order"
            value={post_model}
            onChange={(event) => setPostModel(event.target.value)}
            onBlur={handleBlur}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Predict Function</FormLabel>
          <Input
            type="text"
            name="predict_function"
            value={formData.predict_function}
            onChange={handleChange}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Storage Options</FormLabel>
          <Textarea
            name="storage_options"
            value={storageOptionInput}
            onChange={(event) => setStorageOptionInput(event.target.value)}
            onBlur={handleBlurObject}
            readOnly={false}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Container Options</FormLabel>
          <Textarea
            name="container_options"
            value={containerOptionInput}
            onChange={(event) => setContainerOptionInput(event.target.value)}
            onBlur={handleBlurObject}
            readOnly={false}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Model Metadata</FormLabel>
          <Textarea
            name="model_metadata"
            value={modelMetadataInput}
            onChange={(event) => setModelMetadataInput(event.target.value)}
            onBlur={handleBlurObject}
            readOnly={false}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Model Version</FormLabel>
          <Input
            type="number"
            name="model_version"
            value={formData.model_version}
            onChange={handleChange}
          />
        </FormControl>

        <FormControl>
          <FormLabel>Input Features and Types</FormLabel>
          <Textarea
            name="input_features_and_types"
            value={inputFeaturesInput}
            onChange={(event) => setInputFeaturesInput(event.target.value)}
            onBlur={handleBlurObject}
            readOnly={false}
          />
        </FormControl>

        <FormControl>
          <FormLabel>Output Names and Types</FormLabel>
          <Textarea
            name="output_names_and_types"
            value={outputNamesInput}
            onChange={(event) => setOutputNamesInput(event.target.value)}
            onBlur={handleBlurObject}
            readOnly={false}
          />

          <Flex justifyContent="center" direction={'column'}>
            {/* Show error message if there is any */}
            <ErrorMessage message={errorMessage} />
            <Button type="submit" mt={4} isDisabled={Boolean(errorMessage)}>
              Submit
            </Button>
          </Flex>
        </FormControl>
      </form>
    </Box>
  );
}

export default Form;
