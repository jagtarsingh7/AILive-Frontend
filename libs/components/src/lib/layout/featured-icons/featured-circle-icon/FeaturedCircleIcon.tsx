import {
  Circle,
  ThemingProps,
  omitThemingProps,
  SquareProps,
  useStyleConfig,
} from '@chakra-ui/react';

import { FeaturedCircleIconSize } from './FeaturedCircleIcon.styles';

export interface FeaturedCircleIconProps
  extends Omit<SquareProps, 'size'>,
    ThemingProps {
  icon?: React.ReactElement;
  size?: FeaturedCircleIconSize;
}

export function FeaturedCircleIcon(props: FeaturedCircleIconProps) {
  const { icon, children, ...rest } = omitThemingProps(props);
  const styles = useStyleConfig('FeaturedCircleIcon', { ...props });

  return (
    <Circle {...rest} __css={styles}>
      {icon || children}
    </Circle>
  );
}

export default FeaturedCircleIcon;
