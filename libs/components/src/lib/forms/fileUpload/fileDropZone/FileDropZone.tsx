import { useDropzone, FileRejection, DropEvent } from 'react-dropzone';
import { Box, Circle, useMultiStyleConfig } from '@chakra-ui/react';

import Text from '../../../typography/text/Text';
import { UploadIcon } from '@canvass/shared/icons';

interface FileDropZoneProps {
  isDisabled?: boolean;
  labels: {
    clickToUploadText: string;
    dragDropText: string;
    uploadTypesText: string;
  };
  onDrop?: <T extends File>(
    acceptedFiles: T[],
    fileRejections: FileRejection[],
    event: DropEvent
  ) => void;
}

const FileDropZone = (props: FileDropZoneProps) => {
  const { isDisabled = false, onDrop, labels } = props;
  const { clickToUploadText, dragDropText, uploadTypesText } = labels;
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    disabled: isDisabled,
    accept: {
      'text/csv': ['.csv'],
    },
  });

  const styles = useMultiStyleConfig('FileDropZone', {
    variant: isDragActive ? 'active' : 'default',
  });

  // TODO: [Ayden] update copy when available from product
  return (
    <Box
      __css={styles['container']}
      aria-disabled={isDisabled}
      {...getRootProps()}
    >
      <input
        data-testid="drop-input"
        disabled={isDisabled}
        {...getInputProps()}
      />
      <Circle __css={styles['circle']}>
        <UploadIcon />
      </Circle>
      <Text
        as="span"
        aria-disabled={isDisabled}
        fontWeight="medium"
        color="primary.700"
        mr={1}
        sx={styles['textLink']}
      >
        {clickToUploadText}
      </Text>
      <Text as="span" fontSize="sm">
        {dragDropText}
      </Text>
      <Text fontSize="xs"> {uploadTypesText}</Text>
    </Box>
  );
};

export default FileDropZone;
