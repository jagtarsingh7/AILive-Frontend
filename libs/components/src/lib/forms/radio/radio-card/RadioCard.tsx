import {
  HStack,
  VStack,
  Flex,
  useMultiStyleConfig,
  useRadio,
  UseRadioProps,
  Text,
  BoxProps,
} from '@chakra-ui/react';

import { GroupCard } from '../../checkbox/checkbox-card/CheckboxCard';

import ClickableLabel from '../../checkbox/checkbox-card/ClickableLabel';

export interface RadioCardProps
  extends GroupCard,
    UseRadioProps,
    Omit<BoxProps, 'onChange'> {
  isDisabled?: UseRadioProps['isDisabled'];
}

export const RadioCard = ({
  label,
  subTitle,
  description,
  ...props
}: RadioCardProps) => {
  const { state, getCheckboxProps, getInputProps, getLabelProps, htmlProps } =
    useRadio(props);

  const styles = useMultiStyleConfig('RadioCard', {
    variant: state.isChecked ? 'checked' : '',
  });

  const radioStyle = useMultiStyleConfig('Radio', { size: 'md' });

  return (
    <ClickableLabel
      __css={styles['item']}
      {...htmlProps}
      isDisabled={state.isDisabled}
    >
      <input {...getInputProps()} hidden />
      <Flex
        display="inline-flex"
        alignItems="center"
        justifyContent="center"
        flexShrink="0"
        className="checkbox"
        __css={radioStyle['control']}
        {...getCheckboxProps()}
      />
      <VStack spacing={0} alignItems="flex-start">
        <HStack spacing={1}>
          <Text sx={styles['label']} {...getLabelProps()}>
            {label ?? props.value}
          </Text>
          <Text sx={styles['text']} {...getLabelProps()}>
            {subTitle}
          </Text>
        </HStack>
        <Text sx={styles['text']} {...getLabelProps()}>
          {description}
        </Text>
      </VStack>
    </ClickableLabel>
  );
};

export default RadioCard;
