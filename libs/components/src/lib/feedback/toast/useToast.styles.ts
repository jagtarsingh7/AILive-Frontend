import { AlertStatus } from '@chakra-ui/react';

export const createContainerStyle = (status: AlertStatus) => {
  const colorScheme = status === 'info' ? 'primary' : status;

  return {
    border: '1px',
    borderRadius: 'lg',
    borderColor: `${colorScheme}.300`,
    color: `${colorScheme}.700`,
    button: {
      top: 2.5,
      right: 3,
      marginTop: 1,
      _hover: {
        backgroundColor: `${colorScheme}.25`,
      },
    },
    'span > .chakra-icon': {
      fontSize: 'xl',
      marginRight: 4,
      color: `${colorScheme}.600`,
      marginTop: 1,
    },
    '.chakra-alert__title': {
      fontSize: 'sm',
      lineHeight: 5,
      fontWeight: 'medium',
      marginTop: 1,
    },
    '.chakra-alert__desc': {
      fontSize: 'sm',
      lineHeight: 5,
      fontWeight: 'normal',
    },
    '.chakra-alert': {
      backgroundColor: `${colorScheme}.25`,
      borderRadius: 'lg',
      minH: '3.25rem',
      minW: '30rem',
    },
  };
};
