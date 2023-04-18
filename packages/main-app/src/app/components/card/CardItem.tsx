import { Box, Stack, Text, HStack, Badge } from '@chakra-ui/react';
import './CardItem.css';
import { Link } from 'react-router-dom';
import { Model } from '../model_store/types';

interface modelsData {
  model: Model;
}
function CardItem(prop: modelsData) {
  return (
    <Link to="/getmodel" state={{ from: prop.model }}>
      <Box
        className="card "
        _hover={{
          background: 'white',
          color: 'teal.500',
        }}
      >
        <Stack spacing={2}>
          <Text className="card-title">Model ID: {prop.model.id}</Text>
          <Text className="card-description">
            Predict Function: {prop.model.predict_function}
          </Text>
          <Text className="card-description">
            Storage Options:{' '}
            {Object.entries(prop.model.container_options).map(
              ([key, value]) => (
                <span key={key}>
                  {key}: {value}{' '}
                </span>
              )
            )}
          </Text>
          <HStack>
            {Object.keys(prop.model.container_options).map((tag) => (
              <Badge key={tag} colorScheme="green">
                {tag}
              </Badge>
            ))}
          </HStack>
        </Stack>
      </Box>
    </Link>
  );
}

export default CardItem;
