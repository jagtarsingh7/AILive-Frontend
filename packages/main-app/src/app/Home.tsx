import { Container, Text } from '@canvass/components';
import CardTable from './CardTable';
import './Heading3D.css';
import { Box } from '@chakra-ui/react';
import React, { useContext } from 'react';
import { useNavigate } from 'react-router';
import { UserContext } from '../context/UserContext';

function Home() {
  const [hover, setHover] = React.useState(true);
  const [token] = useContext(UserContext);
  const navigate = useNavigate();

  const handleHover = () => {
    setHover(!hover);
  };

  // Redirect to login if token is not defined
  if (!token) {
    navigate('/login');
    return null;
  }

  return (
    <Container maxW="2xl" centerContent>
      <Box
        className={`square-container ${hover ? 'hovered' : ''}`}
        onMouseEnter={handleHover}
        onMouseLeave={handleHover}
      >
        <Text className="square-text">CANVASS</Text>
      </Box>
      <CardTable></CardTable>
    </Container>
  );
}

export default Home;
