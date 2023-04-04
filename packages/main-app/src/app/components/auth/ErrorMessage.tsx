import { Text } from '@canvass/components';
import React from 'react';

type ErrorMessageProps = {
  message: string;
  pb?: number;
};

// Component to show error message
function ErrorMessage({ message, pb = 0 }: ErrorMessageProps) {
  return (
    <Text color="red" mt={4} pb={pb}>
      {message}
    </Text>
  );
}

export default ErrorMessage;
