import React from 'react';
import { Box, Flex, Text } from '@chakra-ui/react';
import { Model } from '../model_store/types';
import './ViewModel.css';

interface ViewModelProps {
  model: Model;
}

function ViewModel(prop: ViewModelProps) {
  return (
    <Flex
      width="70%"
      flexDirection="column"
      p="4"
      bg="gray.50"
      rounded="md"
      _hover={{ bg: 'gray.100', cursor: 'pointer' }}
    >
      <Box className="box">
        <Box mb="2">
          <Text fontWeight="bold">Tags:</Text>
        </Box>
        <Box mb="2">
          <Text fontWeight="bold">ID:</Text>
          <Text ml="2">{prop.model.id}</Text>
        </Box>
        <Box mb="2">
          <Text fontWeight="bold">Pre-model Order:</Text>
          {prop.model.pre_model_order.map((item, index) => (
            <Text key={index} ml="2">
              {item}
            </Text>
          ))}
        </Box>
        <Box mb="2">
          <Text fontWeight="bold">Predict Function:</Text>
          <Text ml="2">{prop.model.predict_function}</Text>
        </Box>
        <Box mb="2">
          <Text fontWeight="bold">Container Options:</Text>
          <Box ml="2">
            {Object.entries(prop.model.container_options).map(
              ([key, value]) => (
                <Text key={key}>
                  {key}: {value}
                </Text>
              )
            )}
          </Box>
        </Box>
        <Box mb="2">
          <Text fontWeight="bold">Model Version:</Text>
          <Text ml="2">{prop.model.model_version}</Text>
        </Box>
        <Box mb="2">
          <Text fontWeight="bold">Output Names and Types:</Text>
          <Box ml="2">
            {Object.entries(prop.model.output_names_and_types).map(
              ([key, value]) => (
                <Text key={key}>
                  {key}: {value}
                </Text>
              )
            )}
          </Box>
        </Box>
        <Box mb="2">
          <Text fontWeight="bold">User ID:</Text>
          <Text ml="2">{prop.model.user_id}</Text>
        </Box>
        <Box mb="2">
          <Text fontWeight="bold">Custom Functions:</Text>
          <Box ml="2">
            {Object.entries(prop.model.custom_functions).map(([key, value]) => (
              <Text key={key}>
                {key}: {value}
              </Text>
            ))}
          </Box>
        </Box>
        <Box mb="2">
          <Text fontWeight="bold">Post-model Order:</Text>
          {prop.model.post_model_order.map((item, index) => (
            <Text key={index} ml="2">
              {item}
            </Text>
          ))}
        </Box>
        <Box mb="2">
          <Text fontWeight="bold">Storage Options:</Text>
          <Box ml="2">
            {Object.entries(prop.model.storage_options).map(([key, value]) => (
              <Text key={key}>
                {key}: {value}
              </Text>
            ))}
          </Box>
        </Box>
        <Box mb="2">
          <Text fontWeight="bold">Model Metadata:</Text>
          <Box ml="2">
            {Object.entries(prop.model.model_metadata).map(([key, value]) => (
              <Text key={key}>
                {key}: {value}
              </Text>
            ))}
          </Box>
        </Box>
        <Box mb="2">
          <Text fontWeight="bold">Input Features and Types:</Text>
          <Box ml="2">
            {Object.entries(prop.model.input_features_and_types).map(
              ([key, value]) => (
                <Text key={key}>
                  {key}: {value}
                </Text>
              )
            )}
          </Box>
        </Box>
      </Box>
    </Flex>
  );
}

export default ViewModel;
