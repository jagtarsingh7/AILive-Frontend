import { defineStyle, defineStyleConfig } from '@chakra-ui/styled-system';

const focusRing = defineStyle(({ colorScheme: c }) => ({
  _focus: {
    ring: 4,
    ringColor: `${c}.100`,
  },
}));

const strokeAndColor = (colorScheme: string, value: number) => ({
  color: `${colorScheme}.${value}`,
  stroke: `${colorScheme}.${value}`,
});

const disabled = defineStyle(({ colorScheme: c }) => strokeAndColor(c, 300));

const ghostVariantStyle = defineStyle((props) => {
  const { colorScheme: c } = props;

  return {
    border: 'none',
    bg: 'none',
    ...strokeAndColor(c, c === 'gray' ? 500 : 700),
    _hover: {
      ...strokeAndColor(c, c === 'gray' ? 600 : 800),
      _disabled: disabled(props),
    },
    _disabled: disabled(props),
  };
});

const outlineVariant = defineStyle((props) => {
  const { colorScheme: c } = props;
  return {
    ...focusRing(props),
    border: '1px solid',
    bg: 'white',
    borderColor: c === 'gray' ? `${c}.200` : `${c}.300`,
    ...strokeAndColor(c, 700),
    _hover: {
      bg: `${c}.50`,
      ...strokeAndColor(c, 800),
      _disabled: disabled(props),
    },
    _active: {
      bg: `${c}.50`,
    },
    _disabled: {
      borderColor: c === 'gray' ? `${c}.100` : `${c}.200`,
      ...disabled(props),
    },
  };
});

const solidVariant = defineStyle((props) => {
  const { colorScheme: c } = props;
  return {
    ...focusRing(props),
    bg: `${c}.600`,
    color: 'white',
    stroke: 'white',
    _hover: {
      bg: `${c}.700`,
      _disabled: {
        bg: `${c}.200`,
      },
    },
    _disabled: {
      bg: `${c}.200`,
      opacity: 1,
    },
  };
});

const ghostVariant = defineStyle((props) => {
  const { colorScheme: c } = props;
  return {
    ...focusRing(props),
    _active: {
      bg: `${c}.50`,
    },
    ...ghostVariantStyle(props),
    _hover: {
      bg: `${c}.50`,
    },
  };
});

const linkVariant = defineStyle((props) => ({
  ...ghostVariantStyle(props),
}));

const sidebarNavVariant = defineStyle((props) => {
  const { colorScheme: c } = props;

  const colorStrokeVal = c === 'gray' ? 500 : 600;
  const bgVal = c === 'gray' ? 200 : 100;

  return {
    ...solidVariant(props),
    color: `${c}.${colorStrokeVal}`,
    stroke: `${c}.${colorStrokeVal}`,
    position: 'relative',
    bg: `${c}.${bgVal}`,
    _hover: {
      bg: `${c}.${bgVal + 100}`,
      color: `${c}.${colorStrokeVal + 100}`,
      stroke: `${c}.${colorStrokeVal + 100}`,
    },
    _active: {
      ring: 1,
      ringColor: `${c}.600`,
      ringOffset: '4px',
      _hover: {
        ringColor: `${c}.700`,
      },
    },
  };
});

const breadcrumbNavVariant = defineStyle((props) => {
  const { colorScheme: c } = props;

  const colorStrokeVal = c === 'gray' ? 500 : 600;
  const bgVal = c === 'gray' ? 50 : 100;
  const activeStyle = {
    bg: `${c}.${bgVal}`,
    color: `${c}.${colorStrokeVal + 200}`,
    stroke: `${c}.${colorStrokeVal + 200}`,
    ring: 0,
  };

  return {
    ...ghostVariant(props),
    color: `${c}.${colorStrokeVal}`,
    stroke: `${c}.${colorStrokeVal}`,
    _hover: activeStyle,
    _active: activeStyle,
    _focus: { ring: 0 },
  };
});

const middleBarNavVariant = defineStyle((props) => {
  const { colorScheme: c } = props;

  const activeColorStroke = strokeAndColor(c, 600);
  const activeAndHover = {
    bg: `${c}.25`,
    borderColor: c === 'warning' ? 'warning.400' : 'primary.600',
    ...activeColorStroke,
    '.chakra-button__icon': {
      bg: `${c}.100`,
      ...activeColorStroke,
    },
    '.chakra-badge': {
      bg: 'primary.50',
      ...activeColorStroke,
    },
  };

  return {
    ...outlineVariant(props),
    ...strokeAndColor('gray', 700),
    borderColor: c === 'warning' ? 'warning.200' : 'gray.200',
    _disabled: disabled(props),
    _hover: activeAndHover,
    _active: activeAndHover,
    '.chakra-button__icon': {
      width: 8,
      height: 8,
      padding: 2.5,
      marginRight: 4,
      bg: 'gray.50',
      borderRadius: 'md',
      alignItems: 'center',
      justifyContent: 'center',
      ...strokeAndColor('gray', 500),
      svg: {
        width: 4,
        height: 4,
      },
    },
    '.alert-icon': {
      width: 4,
      height: 4,
      ...strokeAndColor('warning', 600),
      marginTop: 0.5,
    },
  };
});

const variants = {
  solid: solidVariant,
  ghost: ghostVariant,
  outline: outlineVariant,
  link: linkVariant,
  sidebarNav: sidebarNavVariant,
  breadcrumbNav: breadcrumbNavVariant,
  middleBarNav: middleBarNavVariant,
};

const sizes = {
  sm: {
    fontSize: 'sm',
    h: 9,
    minW: 9,
    px: 3.5,
  },
  md: {
    fontSize: 'sm',
    h: 10,
    minW: 10,
    px: 4,
  },
  lg: {
    fontSize: 'md',
    h: '2.75rem', // next closet token rounds up to 12 (48px) vs 44px in design
    minW: '2.75rem',
    px: 4,
  },
  xl: {
    fontSize: 'md',
    h: 12,
    minW: 12,
    px: 5,
  },
  '2xl': {
    fontSize: 'lg', // next closest token is between 14 and 16 (15)
    h: '3.75rem',
    minW: '3.75rem',
    px: 7,
  },
};

const baseStyle = defineStyle({
  fontWeight: 'medium',
  borderRadius: 'lg',
});

const ButtonStyles = defineStyleConfig({
  baseStyle,
  variants,
  sizes,
  defaultProps: {
    size: 'md',
    variant: 'solid',
    colorScheme: 'primary',
  },
});

export default ButtonStyles;
