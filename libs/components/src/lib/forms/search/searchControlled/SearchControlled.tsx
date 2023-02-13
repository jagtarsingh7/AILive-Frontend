import Input from '../../input/Input';
import { SearchIcon } from '@canvass/shared/icons';
import { Box } from '@chakra-ui/react';
import { InputProps as ChakraInputProps } from '@chakra-ui/react';

interface SearchControlledProps extends ChakraInputProps {
  dataTestId?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export function SearchControlled(props: SearchControlledProps) {
  const { placeholder, dataTestId, onChange, value, ...rest } = props;

  return (
    <Box maxWidth="400px" {...rest}>
      <Input.Group>
        <Input.LeftElement>
          <SearchIcon color="gray.500" />
        </Input.LeftElement>
        <Input
          type="search"
          value={value}
          placeholder={placeholder}
          data-testid={dataTestId}
          onChange={onChange}
          autoComplete="off"
        />
      </Input.Group>
    </Box>
  );
}

export default SearchControlled;
