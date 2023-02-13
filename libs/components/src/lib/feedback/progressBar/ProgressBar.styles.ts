import { progressAnatomy as parts } from '@chakra-ui/anatomy';
import {
  createMultiStyleConfigHelpers,
  defineStyle,
} from '@chakra-ui/styled-system';
import { FlexProps } from '@chakra-ui/react';

const { defineMultiStyleConfig, definePartsStyle } =
  createMultiStyleConfigHelpers(parts.keys);

const baseStyleLabel = defineStyle({
  lineHeight: 'shorter',
  fontSize: 'sm',
  fontWeight: 'medium',
  color: 'gray.700',
});

const baseStyleTrack = defineStyle({
  bg: 'gray.200',
});

const baseStyleFilledTrack = defineStyle((props) => {
  const { colorScheme: c } = props;
  return {
    bg: `${c}.600`,
  };
});

const baseStyle = definePartsStyle((props) => ({
  label: baseStyleLabel,
  filledTrack: baseStyleFilledTrack(props),
  track: baseStyleTrack,
}));

const sizes = {
  md: definePartsStyle({
    track: {
      h: '2',
      borderRadius: 'base',
    },
  }),
};

const progressBarStyles = defineMultiStyleConfig({
  sizes,
  baseStyle,
  defaultProps: {
    size: 'md',
    colorScheme: 'primary',
  },
});

export const labelOptions = ['none', 'right', 'bottomRight'] as const;
// Layout based on labelOptions
export const layout: Record<
  (typeof labelOptions)[number],
  Partial<FlexProps>
> = {
  right: {
    flexDirection: 'row',
    alignItems: 'baseline',
    columnGap: '3',
  },
  bottomRight: {
    flexDirection: 'column',
    alignItems: 'flex-end',
    rowGap: '2',
  },
  none: {},
} as const;

export type LayoutOptions = keyof typeof layout;

export default progressBarStyles;
