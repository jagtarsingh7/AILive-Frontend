import { Box, VStack } from '@chakra-ui/react';
import React from 'react';
import CardItem from './CardItem';
import './CardTable.css';

interface Card {
  id: number;
  title: string;
  description: string;
  tags: string[];
}

const cards: Card[] = [
  {
    id: 1,
    title: 'Model 1',
    description: 'This is the first card for Model.',
    tags: ['Data', 'Data'],
  },
  {
    id: 2,
    title: 'Model 2',
    description: 'This is the second card for Model.',
    tags: ['Data', 'Data'],
  },
  {
    id: 3,
    title: 'Model 3',
    description: 'This is the third card for Model.',
    tags: ['Data', 'Data'],
  },
];

const CardTable: React.FC = () => {
  return (
    <Box className="card-container">
      <VStack spacing={4} align="stretch">
        {cards.map((card) => (
          <CardItem key={card.id} card={card} />
        ))}
      </VStack>
    </Box>
  );
};

export default CardTable;
