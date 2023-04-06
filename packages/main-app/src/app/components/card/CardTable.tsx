import { Box, VStack } from '@chakra-ui/react';
import React from 'react';
import CardItem from './CardItem';
import './CardTable.css';
import { Model } from '../model_store/types';

interface CardTableProps {
  model: Model[];
}
function CardTable(props: CardTableProps) {
  return (
    <Box className="card-container">
      <VStack spacing={4} align="stretch">
        {props.model.map((modelCard) => (
          <CardItem key={modelCard.id} model={modelCard} />
        ))}
      </VStack>
    </Box>
  );
}

export default CardTable;
