import { IconProps } from '@chakra-ui/react';
import Icon from './Icon';

const Check = (props: IconProps) => (
  <Icon viewBox="0 0 14 14" width="1em" height="1em" {...props}>
    <polygon
      fill="currentColor"
      points="5.5 11.9993304 14 3.49933039 12.5 2 5.5 8.99933039 1.5 4.9968652 0 6.49933039"
    />
  </Icon>
);

export default Check;
