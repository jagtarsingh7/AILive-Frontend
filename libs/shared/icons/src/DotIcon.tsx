import { IconProps } from '@chakra-ui/react';
import Icon from './Icon';

const DotIcon = (props: IconProps) => (
  <Icon {...props}>
    <circle cx="12" cy="12" r="10" fill="currentColor" stroke="currentColor" />
  </Icon>
);

export default DotIcon;
