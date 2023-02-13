import {
  createMultiStyleConfigHelpers,
  defineStyle,
} from '@chakra-ui/styled-system';

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(['container', 'circle', 'textLink']);

const baseContainer = defineStyle({
  py: 4,
  px: 6,
  textAlign: 'center',
  cursor: 'pointer',
  border: '1px',
  borderRadius: 'lg',
  color: 'gray.600',
  borderColor: 'gray.200',
  bg: 'white',
  _disabled: {
    bg: 'gray.50',
    cursor: 'not-allowed',
  },
});

const baseCircle = defineStyle({
  mx: 'auto',
  mb: 4,
  width: 10,
  height: 10,
  lineHeight: 10,
  ring: 6,
  color: 'gray.600',
  bg: 'gray.100',
  ringColor: 'gray.50',
});

const baseTextLink = defineStyle({
  _disabled: {
    color: 'gray.300',
  },
});

const activeContainerStyle = defineStyle({
  color: 'primary.600',
  bg: 'primary.25',
  borderColor: 'primary.300',
});

const activeCircleStyle = defineStyle({
  color: 'primary.600',
  bg: 'primary.100',
  ringColor: 'primary.50',
});

const baseStyle = definePartsStyle({
  container: baseContainer,
  circle: baseCircle,
  textLink: baseTextLink,
});

const variants = {
  active: definePartsStyle({
    container: activeContainerStyle,
    circle: activeCircleStyle,
  }),
};

const FileDropZoneStyles = defineMultiStyleConfig({
  baseStyle,
  variants,
});

export default FileDropZoneStyles;
