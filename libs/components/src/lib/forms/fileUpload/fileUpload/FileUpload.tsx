import { useState, useCallback } from 'react';

import { Box } from '@chakra-ui/react';
import FileDropZone from '../fileDropZone/FileDropZone';
import FileUploadItem from '../fileUploadItem/FileUploadItem';

const FileUpload = () => {
  const [files, setFiles] = useState<File[]>([]);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    return setFiles((prevState) => [...prevState, ...acceptedFiles]);
  }, []);

  const onDelete = useCallback(
    (uploadedFile: File) => {
      const filteredFiles = files?.filter(
        (filteredData) =>
          filteredData.name !== uploadedFile.name ||
          filteredData.lastModified !== uploadedFile.lastModified
      );
      setFiles(filteredFiles);
    },
    [files]
  );

  const labels = {
    clickToUploadText: 'Click to upload',
    dragDropText: 'or drag and drop',
    uploadTypesText: '.CSV files only',
  };

  return (
    <Box>
      <FileDropZone onDrop={onDrop} labels={labels} />
      {files?.map((file) => {
        const { name, size, lastModified } = file;
        return (
          <FileUploadItem
            key={name}
            fileName={name}
            fileSize={size}
            lastModified={lastModified}
            onDelete={() => onDelete(file)}
          />
        );
      })}
    </Box>
  );
};

export default FileUpload;
