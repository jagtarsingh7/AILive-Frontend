import { useMemo } from 'react';
import {
  AlertStatus,
  UseToastOptions,
  useToast as useChakraToast,
} from '@chakra-ui/react';

import {
  AlertTriangleIcon,
  CheckCircleIcon,
  AlertCircleIcon,
  InfoCircleIcon,
} from '@canvass/shared/icons';

import Spinner from '../spinner/Spinner';

import { createContainerStyle } from './useToast.styles';

export const statusIcon: Record<AlertStatus, React.ReactNode> = {
  info: <InfoCircleIcon />,
  warning: <AlertTriangleIcon />,
  success: <CheckCircleIcon />,
  error: <AlertCircleIcon />,
  loading: <Spinner height="inherit" borderWidth={3} />,
};

export const useToast = () => {
  const chakraToast = useChakraToast();

  return useMemo(
    () => (options: UseToastOptions) => {
      const { status = 'info', ...otherOptions } = options;

      chakraToast({
        icon: statusIcon[status],
        isClosable: true,
        variant: 'subtle',
        containerStyle: createContainerStyle(status),
        position: 'top',
        ...otherOptions,
      });
    },
    [chakraToast]
  );
};

export default useToast;
