import { Button, Text, Heading, Input } from '@canvass/components';
import { Box, Container, HStack } from '@chakra-ui/react';

function UploadModel() {
  function uploadModel() {
    alert('Make page!');
  }
  return (
    <Container maxW="2xl" centerContent>
      <Heading>Upload new model</Heading>
      <Box mt={4}>
        <HStack m={2}>
          <Text>Name: </Text>
          <Input type={'text'} />
        </HStack>
        <Button w="full" onClick={uploadModel} mr={4}>
          Upload
        </Button>
      </Box>
    </Container>
  );
}

export default UploadModel;
