import {
  Radio as ChakraRadio,
  RadioProps as ChakraRadioProps,
} from '@chakra-ui/react';

export const RadioSizes = ['sm', 'md'] as const;

type SizesType = (typeof RadioSizes)[number];

interface RadioProps extends ChakraRadioProps {
  size?: SizesType;
  isChecked?: ChakraRadioProps['isChecked'];
  onChange?: ChakraRadioProps['onChange'];
  isDisabled?: ChakraRadioProps['isDisabled'];
}

const Radio = (props: RadioProps) => <ChakraRadio {...props} />;

export default Radio;
