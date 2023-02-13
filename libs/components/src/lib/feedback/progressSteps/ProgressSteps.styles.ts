import { StepsStyleConfig } from 'chakra-ui-steps';

import { StyleFunctionProps } from '@chakra-ui/theme-tools';
import { defineStyleConfig } from '@chakra-ui/react';

const sizes = {
  sm: {
    stepIconContainer: {
      width: 'var(--chakra-sizes-6)',
      height: 'var(--chakra-sizes-6)',
      border: 'var(--chakra-borders-2px)',
    },
    icon: {
      width: 'var(--chakra-sizes-2-5)',
      height: 'var(--chakra-sizes-2-5)',
    },
    label: {
      textAlign: 'center',
    },
    description: {
      textAlign: 'center',
    },
  },
};

export const ProgressStepsStyles = defineStyleConfig({
  baseStyle: (props: StyleFunctionProps) => {
    const { colorScheme: c } = props;
    const inactiveColor = 'gray.200';
    const activeColor = `${c}.600`;
    const hoverColor = `${c}.100`;
    const defaultBgColor = `${c}.50`;

    const hover = {
      borderColor: activeColor,
      bg: hoverColor,
    };

    return {
      ...StepsStyleConfig.baseStyle(props),
      connector: {
        ...StepsStyleConfig.baseStyle(props)['connector'],
        height: 0.5,
        borderColor: inactiveColor,
        _highlighted: {
          borderColor: activeColor,
        },
      },
      description: {
        ...StepsStyleConfig.baseStyle(props)['description'],
        color: '',
        mt: 0,
        fontWeight: 'normal',
        fontSize: 'sm',
        lineHeight: 5,
        opacity: 1,
      },
      label: {
        ...StepsStyleConfig.baseStyle(props)['label'],
        color: '',
        fontWeight: 'medium',
        fontSize: 'sm',
        lineHeight: 5,
        opacity: 1,
      },

      stepIconContainer: {
        ...StepsStyleConfig.baseStyle(props)['stepIconContainer'],
        borderColor: inactiveColor,
        bg: 'white',
        color: 'gray.200',
        '&[data-clickable]:hover': {
          borderColor: inactiveColor,
          bg: 'gray.50',
        },
        _activeStep: {
          bg: defaultBgColor,
          color: activeColor,
          borderColor: activeColor,
          ring: 4,
          ringColor: hoverColor,
          '&[data-clickable]:hover': hover,
          _invalid: {
            bg: 'error.500',
            borderColor: 'error.500',
          },
        },
        _highlighted: {
          bg: defaultBgColor,
          borderColor: activeColor,
          color: activeColor,
          '&[data-clickable]:hover': hover,
          svg: {
            color: activeColor,
          },
        },
      },
    };
  },
  sizes,
  defaultProps: {
    size: 'sm',
    colorScheme: 'primary',
  },
});
