import { IconProps } from '@chakra-ui/react';
import Icon from './Icon';

export function Target02Icon(props: IconProps) {
  return (
    <Icon {...props}>
      <path
        d="M22 12H18M6 12H2M12 6V2M12 22V18M20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Icon>
  );
}

export default Target02Icon;
