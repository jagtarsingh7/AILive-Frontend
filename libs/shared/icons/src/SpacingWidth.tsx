import { IconProps } from '@chakra-ui/react';
import Icon from './Icon';

const SpacingWidth = (props: IconProps) => (
  <Icon {...props}>
    <path
      d="M6 12H18M6 12L8 9M6 12L8 15M18 12L16 9M18 12L16 15M21 21V3M3 21V3"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Icon>
);

export default SpacingWidth;
