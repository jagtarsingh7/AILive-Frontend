import { IconProps } from '@chakra-ui/react';
import Icon from './Icon';

const SearchIcon = (props: IconProps) => (
  <Icon {...props}>
    <path
      d="M21 21L17.5001 17.5M20 11.5C20 16.1944 16.1944 20 11.5 20C6.80558 20 3 16.1944 3 11.5C3 6.80558 6.80558 3 11.5 3C16.1944 3 20 6.80558 20 11.5Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Icon>
);

export default SearchIcon;
