import { IconProps } from '@chakra-ui/react';
import Icon from './Icon';

export const CollapseMenuIcon = (props: IconProps) => (
  <Icon {...props}>
    <path
      d="M21 12H15M21 18H12M21 6H12M7 8L3 12M3 12L7 16M3 12H11"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Icon>
);

export default CollapseMenuIcon;
