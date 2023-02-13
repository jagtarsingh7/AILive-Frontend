import { Switch, SwitchProps as ChakraSwitchProps } from '@chakra-ui/react';

export const ToggleSizes = ['sm', 'md'] as const;

type SizesType = (typeof ToggleSizes)[number];

interface ToggleProps extends ChakraSwitchProps {
  size?: SizesType;
  isChecked?: ChakraSwitchProps['isChecked'];
  onChange?: ChakraSwitchProps['onChange'];
  isDisabled?: ChakraSwitchProps['isDisabled'];
}

const sizeSwitcher: { [key: string]: 'md' | 'lg' } = {
  sm: 'md',
  md: 'lg',
};

const Toggle = ({ size, ...props }: ToggleProps) => (
  <Switch size={sizeSwitcher[size ?? 'sm']} {...props} />
);

export default Toggle;
