import { Text } from '@canvass/components';
import React from 'react';

// Component to show error message
function ErrorMessage({ message }: { message: string }) {
  return (
    <Text color="red" mt={4}>
      {message}
    </Text>
  );
}

export default ErrorMessage;
