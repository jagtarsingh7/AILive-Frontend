import { VStack } from '@chakra-ui/react';
//RouterLink is the Link for react router
import { Route, Routes } from 'react-router-dom';
import { UserProvider } from '../context/UserContext';
import Header from './components/header/Header';
import Home from './components/home/Home';
import Login from './components/auth/Login';
import Signup from './components/auth/Signup';
import { Testing } from './testing';
import UploadModel from './components/model_store/UploadModel';
import DeleteModel from './components/model_store/DeleteModel';
import UpdateModel from './components/model_store/UpdateModel';
import GetModel from './components/model_store/GetModel';

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
          <Route path="/updatemodel" element={<UpdateModel />} />
          <Route path="/deletemodel" element={<DeleteModel />} />
          <Route path="/getmodel" element={<GetModel />} />
        </Routes>
      </UserProvider>
    </VStack>
  );
}

export default App;
