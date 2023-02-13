import { modalAnatomy as parts } from '@chakra-ui/anatomy';
import {
  createMultiStyleConfigHelpers,
  defineStyle,
} from '@chakra-ui/styled-system';

const { defineMultiStyleConfig, definePartsStyle } =
  createMultiStyleConfigHelpers(parts.keys);

const baseCloseButton = defineStyle({
  position: 'absolute',
  top: 4,
  insetEnd: 4,
  color: 'gray.500',
  _hover: {
    color: 'gray.600',
    bg: 'gray.50',
  },
  _focusVisible: {
    ring: 4,
    ringColor: 'gray.100',
  },
  _active: {
    bg: 'gray.50',
  },
});

const baseStyleFooter = defineStyle({
  py: 0,
  paddingTop: 6,
});

const baseStyleHeader = defineStyle({
  paddingTop: 0,
  paddingBottom: 6,
  color: 'gray.900',
  fontSize: 5,
  fontWeight: 'none',
});

const baseStyleOverlay = defineStyle({
  bg: 'radial-gradient(150.5% 150.5% at 50% 50%, rgba(0, 0, 0, 0.25) 0%, rgba(255, 255, 255, 0) 100%);',
  backdropFilter: 'blur(4px)',
});

const baseStyleDialog = defineStyle({
  px: 0,
  py: 6,
  borderRadius: 'xl',
});

const baseStyleBody = defineStyle({
  paddingTop: 0,
});

const baseStyle = definePartsStyle({
  overlay: baseStyleOverlay,
  dialogContainer: {},
  closeButton: baseCloseButton,
  dialog: baseStyleDialog,
  header: baseStyleHeader,
  body: baseStyleBody,
  footer: baseStyleFooter,
});

const ModalStyles = defineMultiStyleConfig({
  baseStyle,
  defaultProps: {
    size: 'xl',
  },
});

export default ModalStyles;
