import { IconProps } from '@chakra-ui/react';
import Icon from './Icon';

export const ArrowRightIcon = (props: IconProps) => (
  <Icon stroke="currentcolor" {...props}>
    <path
      d="M5 12H19M19 12L12 5M19 12L12 19"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Icon>
);

export default ArrowRightIcon;
