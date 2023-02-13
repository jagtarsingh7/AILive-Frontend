import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Input from '../../input/Input';
import { SearchIcon } from '@canvass/shared/icons';
import { Box } from '@chakra-ui/react';
import { InputProps as ChakraInputProps } from '@chakra-ui/react';

interface SearchWithParamsProps extends ChakraInputProps {
  dataTestId?: string;
}

export function SearchWithParams(props: SearchWithParamsProps) {
  const { placeholder, dataTestId, ...rest } = props;
  const [searchParams, setSearchParams] = useSearchParams();
  const q = searchParams.get('q');

  useEffect(() => {
    const inputElement = document.getElementById('q') as HTMLInputElement;
    inputElement.value = q ?? '';
  }, [q]);

  return (
    <Box maxWidth="400px" {...rest}>
      <Input.Group>
        <Input.LeftElement>
          <SearchIcon color="gray.500" />
        </Input.LeftElement>
        <Input
          id="q"
          type="search"
          name="q"
          defaultValue={q as string}
          placeholder={placeholder}
          data-testid={dataTestId}
          onChange={(e) => {
            const isFirstSearch = q == null;
            setSearchParams(`q=${e.target.value}`, { replace: !isFirstSearch });
          }}
          autoComplete="off"
        />
      </Input.Group>
    </Box>
  );
}

export default SearchWithParams;
