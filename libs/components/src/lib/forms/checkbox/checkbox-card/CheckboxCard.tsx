import {
  HStack,
  useCheckbox,
  VStack,
  Flex,
  useMultiStyleConfig,
  CheckboxIcon,
  UseCheckboxProps,
} from '@chakra-ui/react';

import ClickableLabel from './ClickableLabel';
import Text from '../../../typography/text/Text';

export interface GroupCard {
  label?: string;
  subTitle?: string;
  description?: string;
}
export interface CheckboxCardProps extends GroupCard, UseCheckboxProps {
  isDisabled?: UseCheckboxProps['isDisabled'];
}

export const CheckboxCard = ({
  label,
  subTitle,
  description,
  ...props
}: CheckboxCardProps) => {
  const { state, getCheckboxProps, getInputProps, getLabelProps, htmlProps } =
    useCheckbox(props);

  const styles = useMultiStyleConfig('CheckboxCard', {
    variant: state.isChecked ? 'checked' : '',
  });

  const checkboxStyle = useMultiStyleConfig('Checkbox', { size: 'md' });

  return (
    <ClickableLabel
      __css={styles['item']}
      {...htmlProps}
      isDisabled={state.isDisabled}
    >
      <input {...getInputProps()} hidden />
      <Flex
        className="checkbox"
        __css={checkboxStyle['control']}
        {...getCheckboxProps()}
        mt={0.5}
      >
        <CheckboxIcon
          __css={checkboxStyle['icon']}
          isChecked={state.isChecked}
        />
      </Flex>
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

export default CheckboxCard;
