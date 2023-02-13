import {
  Badge as ChakraBadge,
  BadgeProps as ChakraBadgeProps,
} from '@chakra-ui/react';
import { Icon, IconProps } from '@chakra-ui/icon';
import { forwardRef } from '@chakra-ui/system';

export const sizes = ['sm', 'md', 'lg'] as const;
type Sizes = (typeof sizes)[number];

export interface BadgeProps extends ChakraBadgeProps {
  variant?: 'subtle' | 'square';
  fontSize?: Sizes;
}

const Badge = (props: BadgeProps) => {
  return <ChakraBadge {...props} />;
};

const LeftIcon = forwardRef<IconProps, 'svg'>((props, ref) => (
  <Icon ref={ref} verticalAlign="middle" marginEnd="1.5" {...props} />
));

const RightIcon = forwardRef<IconProps, 'svg'>((props, ref) => (
  <Icon ref={ref} verticalAlign="middle" marginStart="1.5" {...props} />
));

Badge.LeftIcon = LeftIcon;
LeftIcon.displayName = 'LeftIcon';

Badge.RightIcon = RightIcon;
RightIcon.displayName = 'RightIcon';

export default Badge;
