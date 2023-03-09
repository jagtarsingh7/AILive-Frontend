import { VStack } from '@chakra-ui/react';
//RouterLink is the Link for react router
import { Route, Routes } from 'react-router-dom';
import { UserProvider } from '../context/UserContext';
import Header from './Header';
import Home from './Home';
import Login from './Login';
import Signup from './Signup';
import { Testing } from './testing';
import UploadModel from './UploadModel';

export function App() {
  return (
    <VStack spacing={10}>
      <UserProvider>
        <Header />
        {/* Display content according to route */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/testing" element={<Testing />} />
          <Route path="/uploadmodel" element={<UploadModel />} />
        </Routes>
      </UserProvider>
    </VStack>
  );
}

export default App;
