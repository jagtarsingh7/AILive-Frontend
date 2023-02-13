import { IconProps } from '@chakra-ui/react';
import Icon from './Icon';

export const ChevronRightIcon = (props: IconProps) => (
  <Icon stroke="currentcolor" {...props}>
    <path
      d="M9 18L15 12L9 6"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Icon>
);

export default ChevronRightIcon;
