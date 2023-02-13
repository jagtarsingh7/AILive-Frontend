import { IconProps } from '@chakra-ui/react';
import Icon from './Icon';

export function ChevronDownIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path
        d="M6 9L12 15L18 9"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Icon>
  );
}

export default ChevronDownIcon;
