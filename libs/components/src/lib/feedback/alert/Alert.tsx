import {
  Alert as ChakraAlert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  Box,
  CloseButton,
  AlertStatus,
  useMultiStyleConfig,
  AlertProps as ChakraAlertProps,
  useDisclosure,
  VStack,
} from '@chakra-ui/react';

import { statusIcon } from '../toast/useToast';

export interface AlertProps extends ChakraAlertProps {
  title: string;
  description?: string;
  status?: AlertStatus;
  ctaElement?: React.ReactElement;
  isClosable?: boolean;
  onCloseCallback?: () => void; // function to be called when onClose is clicked
  'data-testid'?: string;
}

const Alert = (props: AlertProps) => {
  const {
    title,
    description,
    status = 'info',
    ctaElement,
    isClosable = true,
    onCloseCallback,
    'data-testid': testId,
    ...styleProps
  } = props;

  const { isOpen: isVisible, onClose } = useDisclosure({
    defaultIsOpen: true,
  });

  const closeButtonStyle = useMultiStyleConfig('Alert');

  return isVisible ? (
    <ChakraAlert
      status={status}
      border="1px"
      data-testid={testId}
      {...styleProps}
    >
      <AlertIcon>{statusIcon[status]}</AlertIcon>
      <VStack alignItems="start" spacing="3" width="full">
        <Box>
          <AlertTitle data-testid="alert-title">{title}</AlertTitle>
          <AlertDescription data-testid="alert-description">
            {description}
          </AlertDescription>
          {isClosable && (
            <CloseButton
              data-testid="alert-close-button"
              __css={closeButtonStyle['closeButton']}
              onClick={() => {
                if (onCloseCallback) onCloseCallback();
                onClose();
              }}
            />
          )}
        </Box>
        {ctaElement}
      </VStack>
    </ChakraAlert>
  ) : null;
};

export default Alert;
