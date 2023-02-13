import { InputProps as ChakraInputProps } from '@chakra-ui/react';
import SearchWithParams from './searchWithParams/SearchWithParams';
import SearchControlled from './searchControlled/SearchControlled';

const searchTypes = {
  CONTROLLED: 'controlled',
  PARAMS: 'params',
} as const;

type SearchProps =
  | {
      type: typeof searchTypes.PARAMS;
      dataTestId?: string;
    }
  | {
      type: typeof searchTypes.CONTROLLED;
      dataTestId?: string;
      value: string;
      onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    };

export function Search(props: SearchProps & ChakraInputProps) {
  if (props.type === searchTypes.PARAMS) {
    return <SearchWithParams {...props} />;
  }
  if (props.type === searchTypes.CONTROLLED) {
    return <SearchControlled {...props} />;
  }
  return <></>;
}

export default Search;
