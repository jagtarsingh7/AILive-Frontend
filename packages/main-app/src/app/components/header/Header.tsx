import {
  AppHeader,
  Box,
  Button,
  DropdownMenu,
  Link,
} from '@canvass/components';
import { HEADER_HEIGHT } from '@canvass/shared/utils';
import { ChevronDownIcon } from '@chakra-ui/icons';
import { MenuItem } from '@chakra-ui/react';
import { useContext } from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { UserContext } from '../../../context/UserContext';

function Header() {
  const [token, setToken] = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    setToken(null);
    navigate('/login');
  };

  return (
    <Box w={'full'} mb={HEADER_HEIGHT}>
      <AppHeader
        onSidebarToggle={function (): void {
          throw new Error('Function not implemented.');
        }}
        isSidebarExpanded={false}
        toggleButtonAriaLabel={''}
      >
        {token ? (
          <>
            <Link as={RouterLink} to="/">
              <Button variant="ghost" colorScheme="blackAlpha">
                Home
              </Button>
            </Link>

            <DropdownMenu closeOnSelect={true}>
              <DropdownMenu.Button
                as={Button}
                variant="ghost"
                colorScheme="blackAlpha"
                rightIcon={<ChevronDownIcon />}
              >
                Model
              </DropdownMenu.Button>
              <DropdownMenu.List>
                <MenuItem as={RouterLink} to="/uploadmodel">
                  Upload
                </MenuItem>
                <MenuItem as={RouterLink} to="/getmodel">
                  Get
                </MenuItem>
                <MenuItem as={RouterLink} to="/updatemodel">
                  Update
                </MenuItem>
                <MenuItem as={RouterLink} to="/deletemodel">
                  Delete
                </MenuItem>
              </DropdownMenu.List>
            </DropdownMenu>

            <Link as={RouterLink} to="/login">
              <Button
                variant="ghost"
                colorScheme="blackAlpha"
                onClick={handleLogout}
              >
                Logout
              </Button>
            </Link>
          </>
        ) : (
          <>
            <Link as={RouterLink} to="/login">
              <Button variant="ghost" colorScheme="blackAlpha">
                Login
              </Button>
            </Link>

            <Link as={RouterLink} to="/signup">
              <Button variant="ghost" colorScheme="blackAlpha">
                Sign Up
              </Button>
            </Link>
          </>
        )}
      </AppHeader>
    </Box>
  );
}

export default Header;
