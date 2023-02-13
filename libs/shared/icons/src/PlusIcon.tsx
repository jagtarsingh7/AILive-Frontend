import { IconProps } from '@chakra-ui/react';
import Icon from './Icon';

const PlusIcon = (props: IconProps) => (
  <Icon {...props}>
    <path
      d="M12 5V19M5 12H19"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Icon>
);

export default PlusIcon;
