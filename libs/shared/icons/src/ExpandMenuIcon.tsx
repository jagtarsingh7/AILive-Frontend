import { IconProps } from '@chakra-ui/react';
import Icon from './Icon';

export const ExpandMenuIcon = (props: IconProps) => (
  <Icon {...props}>
    <path
      d="M3 12H9M3 6H12M3 18H12M17 16L21 12M21 12L17 8M21 12H13"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Icon>
);

export default ExpandMenuIcon;
