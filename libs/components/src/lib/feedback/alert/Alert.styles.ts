import { createMultiStyleConfigHelpers } from '@chakra-ui/styled-system';

const parts = ['closeButton'];

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(parts);

const baseStyle = definePartsStyle((props) => {
  const { status } = props;
  const colorScheme = ['info', 'loading'].includes(status) ? 'primary' : status;

  return {
    container: {
      color: `${colorScheme}.300`,
      bg: `${colorScheme}.25`,
      borderRadius: 'lg',
      alignItems: 'flex-start',
      p: 4,
      minH: '3.25rem',
      minW: '21.5rem',
    },
    icon: {
      color: `${colorScheme}.600`,
      flexShrink: 0,
      fontSize: 'xl',
    },
    title: {
      color: `${colorScheme}.700`,
      fontSize: 'sm',
      fontWeight: 'medium',
      lineHeight: '5',
    },
    description: {
      color: `${colorScheme}.600`,
      fontSize: 'sm',
      fontWeight: 'normal',
      lineHeight: '5',
    },
    closeButton: {
      color: `${status}.600`,
      position: 'absolute',
      flexShrink: 0,
      w: 5,
      h: 5,
      right: '4',
      top: '4',
      p: 1,
      _hover: {
        backgroundColor: `${colorScheme}.25`,
      },
    },
  };
});

const AlertStyles = defineMultiStyleConfig({
  baseStyle,
});

export default AlertStyles;
