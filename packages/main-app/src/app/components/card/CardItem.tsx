import { Box, Stack, Text, HStack, Badge } from '@chakra-ui/react';
import React, { useState } from 'react';
import './CardItem.css';

interface Props {
  card: {
    id: number;
    title: string;
    description: string;
    tags: string[];
  };
}

const CardItem: React.FC<Props> = ({ card }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <Box
      className="card"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      boxShadow={hovered ? 'md' : 'none'}
    >
      <Stack spacing={2}>
        <Text className="card-title">{card.title}</Text>
        <Text className="card-description">{card.description}</Text>
        <HStack>
          {card.tags.map((tag) => (
            <Badge key={tag} colorScheme="green">
              {tag}
            </Badge>
          ))}
        </HStack>
      </Stack>
    </Box>
  );
};

export default CardItem;
