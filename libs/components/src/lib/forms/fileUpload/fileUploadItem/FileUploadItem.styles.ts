import {
  createMultiStyleConfigHelpers,
  defineStyle,
} from '@chakra-ui/styled-system';

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers([
    'flexContainer',
    'circleIcon',
    'fileIcon',
    'fileSizeText',
    'errorListItem',
  ]);

const baseFlexContainer = defineStyle({
  border: '1px',
  borderColor: 'primary.600',
  borderRadius: 'md',
  pb: '4',
  px: '3.5',
  background: 'white',
});

const baseCircleIconStyle = defineStyle({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  mr: '3.5',
  width: 8,
  height: 8,
  ring: 6,
  color: 'primary.600',
  bg: 'primary.100',
  ringColor: 'primary.50',
  mt: '4',
});

const baseFileIconStyle = defineStyle({
  w: '10px',
  color: 'primary.600',
});

const baseFileSizeTextStyle = defineStyle({
  color: 'gray.500',
});

// Error state styles

const errorFlexContainer = defineStyle({
  color: 'error.700',
  borderColor: 'error.300',
  background: 'error.25',
});

const errorCircleIconStyle = defineStyle({
  color: 'error.600',
  bg: 'error.100',
  ringColor: 'error.50',
});

const errorFileIconStyle = defineStyle({
  color: 'error.600',
});

const errorFileSizeTextStyle = defineStyle({
  color: 'error.600',
});

const errorListItemStyle = defineStyle({
  listStyleType: 'disc',
  fontSize: 'sm',
  fontWeight: 'medium',
});

const baseStyle = definePartsStyle({
  flexContainer: baseFlexContainer,
  circleIcon: baseCircleIconStyle,
  fileIcon: baseFileIconStyle,
  fileSizeText: baseFileSizeTextStyle,
});

const variants = {
  error: definePartsStyle({
    flexContainer: errorFlexContainer,
    circleIcon: errorCircleIconStyle,
    fileIcon: errorFileIconStyle,
    fileSizeText: errorFileSizeTextStyle,
    errorListItem: errorListItemStyle,
  }),
};

const FileUploadItemStyles = defineMultiStyleConfig({
  baseStyle,
  variants,
});

export default FileUploadItemStyles;
