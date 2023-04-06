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
            User ID: {prop.model.user_id}
          </Text>
          <Text className="card-description">
            Model Version{prop.model.model_version}
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
