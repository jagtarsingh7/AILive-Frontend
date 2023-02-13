import {
  Flex,
  Box,
  Spacer,
  chakra,
  useMultiStyleConfig,
  Circle as CircleIcon,
} from '@chakra-ui/react';

import { TrashIcon, FileIcon } from '@canvass/shared/icons';
import Text from '../../../typography/text/Text';
import IconButton from '../../../forms/button/iconButton/IconButton';
import { formatBytes } from '@canvass/shared/utils';

export interface FileUploadItemProps {
  fileName: File['name'];
  fileSize: File['size'];
  lastModified: File['lastModified'];
  errors?: string[];
  onDelete: (name: string, lastModified: number) => void;
}

export function FileUploadItem(props: FileUploadItemProps) {
  const { fileName, fileSize, lastModified, errors, onDelete } = props;

  const styles = useMultiStyleConfig('FileUploadItem', {
    variant: errors ? 'error' : 'default',
  });

  return (
    <Flex
      sx={styles['flexContainer']}
      aria-invalid={Boolean(errors)}
      data-testid="file-upload-item-container"
      marginTop={4}
    >
      <Flex flexDirection="column" width="full">
        <Flex width="full">
          <CircleIcon __css={styles['circleIcon']} flexShrink="0">
            <FileIcon />
          </CircleIcon>
          <Box>
            <Text
              fontSize="sm"
              fontWeight="medium"
              pt="4"
              data-testid="file-upload-item-name"
            >
              {fileName}
            </Text>
            <Text fontSize="sm" sx={styles['fileSizeText']}>
              {formatBytes(fileSize)}
            </Text>
            {errors && (
              <chakra.ul ml="4">
                {errors.map((error, index) => (
                  <chakra.li
                    key={index}
                    sx={styles['errorListItem']}
                    data-testid="file-upload-item-error"
                  >
                    {error}
                  </chakra.li>
                ))}
              </chakra.ul>
            )}
          </Box>
          <Spacer />
          <IconButton
            aria-label="Delete"
            onClick={() => onDelete(fileName, lastModified)}
            icon={<TrashIcon />}
            size="sm"
            mt="2.5"
            variant="ghost"
            colorScheme={errors ? 'error' : 'gray'}
          />
        </Flex>
      </Flex>
    </Flex>
  );
}

export default FileUploadItem;
