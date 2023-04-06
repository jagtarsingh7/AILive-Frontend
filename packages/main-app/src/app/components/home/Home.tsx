import { Container, Text } from '@canvass/components';
import CardTable from '../card/CardTable';
import './Heading3D.css';
import { Box } from '@chakra-ui/react';
import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { UserContext } from '../../../context/UserContext';
import { Model } from '../model_store/types';
import { API } from '../../api/config';
import axios, { AxiosRequestConfig } from 'axios';

function Home() {
  const [hover, setHover] = useState(true);
  const [token] = useContext(UserContext);
  const [data, setData] = useState<Model[]>();
  const navigate = useNavigate();
  const handleHover = () => {
    setHover(!hover);
  };

  const fetchModels = () => {
    const config: AxiosRequestConfig = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    };

    axios.get(`${API}/api/models/`, config).then((response) => {
      const { model } = response.data; // data has type MyData
      setData(model);
    });
  };

  // Redirect to login if token is not defined

  useEffect(() => {
    if (token) {
      fetchModels();
    }
  }, [token]);

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

      {data ? <CardTable model={data}></CardTable> : <p>No data available</p>}
    </Container>
  );
}

export default Home;
