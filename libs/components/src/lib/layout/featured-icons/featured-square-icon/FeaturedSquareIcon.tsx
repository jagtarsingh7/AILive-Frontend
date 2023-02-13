import {
  ThemingProps,
  omitThemingProps,
  SquareProps,
  useStyleConfig,
  Square,
} from '@chakra-ui/react';

import { FeaturedSquareIconSize } from './FeaturedSquareIcon.styles';

export interface FeaturedSquareIconProps
  extends Omit<SquareProps, 'size'>,
    ThemingProps {
  icon?: React.ReactElement;
  size?: FeaturedSquareIconSize;
}

export function FeaturedSquareIcon(props: FeaturedSquareIconProps) {
  const { icon, children, ...rest } = omitThemingProps(props);
  const styles = useStyleConfig('FeaturedSquareIcon', { ...props });

  return (
    <Square {...rest} __css={styles}>
      {icon || children}
    </Square>
  );
}

export default FeaturedSquareIcon;
