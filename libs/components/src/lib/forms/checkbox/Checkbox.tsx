import {
  Checkbox as ChakraCheckbox,
  CheckboxProps as ChakraCheckboxProps,
} from '@chakra-ui/react';

export const CheckboxSizes = ['sm', 'md'] as const;

type SizesType = (typeof CheckboxSizes)[number];

interface CheckboxProps extends ChakraCheckboxProps {
  size?: SizesType;
  isChecked?: ChakraCheckboxProps['isChecked'];
  onChange?: ChakraCheckboxProps['onChange'];
  isDisabled?: ChakraCheckboxProps['isDisabled'];
  isIndeterminate?: ChakraCheckboxProps['isIndeterminate'];
}

const Checkbox = (props: CheckboxProps) => <ChakraCheckbox {...props} />;

export default Checkbox;
