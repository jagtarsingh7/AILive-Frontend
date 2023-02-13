import {
  FormControl as ChakraFormControl,
  FormControlProps as ChakraFormControlProps,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from '@chakra-ui/react';

interface FormControlProps extends ChakraFormControlProps {
  isInvalid?: ChakraFormControlProps['isInvalid'];
  isDisabled?: ChakraFormControlProps['isDisabled'];
}

const FormControl = (props: FormControlProps) => {
  return <ChakraFormControl {...props} />;
};

FormControl.Label = FormLabel;
FormControl.ErrorMessage = FormErrorMessage;
FormControl.HelperText = FormHelperText;

export default FormControl;
