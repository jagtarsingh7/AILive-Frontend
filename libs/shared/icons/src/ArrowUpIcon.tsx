import { IconProps } from '@chakra-ui/react';
import Icon from './Icon';

export const ArrowUpIcon = (props: IconProps) => (
  <Icon stroke="currentcolor" {...props}>
    <path
      d="M12 19V5M12 5L5 12M12 5L19 12"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Icon>
);

export default ArrowUpIcon;
