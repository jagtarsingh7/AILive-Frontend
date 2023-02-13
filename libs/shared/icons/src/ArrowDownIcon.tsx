import { IconProps } from '@chakra-ui/react';
import Icon from './Icon';

export const ArrowDownIcon = (props: IconProps) => (
  <Icon stroke="currentcolor" {...props}>
    <path
      d="M12 5V19M12 19L19 12M12 19L5 12"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Icon>
);

export default ArrowDownIcon;
