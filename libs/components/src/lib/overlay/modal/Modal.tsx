import {
  Modal as ChakraModal,
  ModalOverlay,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  type ModalProps as ChakraModalProps,
} from '@chakra-ui/react';
import Heading, { HeadingProps } from '../../typography/heading/Heading';
import Text, { TextProps } from '../../typography/text/Text';

export type ModalProps = ChakraModalProps;

const Modal = (props: ModalProps) => (
  <ChakraModal
    scrollBehavior="inside"
    motionPreset="slideInBottom"
    blockScrollOnMount
    isCentered
    {...props}
  />
);

const ModalTitle = (props: HeadingProps) => (
  <Heading
    fontSize="lg"
    fontWeight="medium"
    color="gray.900"
    mb={2}
    {...props}
  />
);

const ModalDescription = (props: TextProps) => (
  <Text color="gray.500" fontSize="sm" {...props} />
);

Modal.Overlay = ModalOverlay;
Modal.Content = ModalContent;
Modal.Close = ModalCloseButton;
Modal.Body = ModalBody;
Modal.Header = ModalHeader;
Modal.Title = ModalTitle;
Modal.Description = ModalDescription;
Modal.Footer = ModalFooter;

export default Modal;
