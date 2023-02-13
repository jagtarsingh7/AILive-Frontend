import {
  Flex,
  useMultiStyleConfig,
  useRadio,
  UseRadioProps,
  Text,
} from '@chakra-ui/react';

import { GroupCard } from '../../checkbox/checkbox-card/CheckboxCard';

import ClickableLabel from '../../checkbox/checkbox-card/ClickableLabel';

export interface RadioTableCardProps extends GroupCard, UseRadioProps {
  isDisabled?: UseRadioProps['isDisabled'];
}

export const RadioTableCard = ({
  label,
  subTitle,
  description,
  ...props
}: RadioTableCardProps) => {
  const { state, getCheckboxProps, getInputProps, getLabelProps, htmlProps } =
    useRadio(props);

  const styles = useMultiStyleConfig('RadioTableCard', {
    variant: state.isChecked ? 'checked' : '',
  });

  const radioStyle = useMultiStyleConfig('Radio', { size: 'md' });

  return (
    <ClickableLabel
      __css={styles['item']}
      {...htmlProps}
      isDisabled={state.isDisabled}
    >
      <input {...getInputProps()} hidden data-testid="table-row-checkbox" />

      <Text
        sx={styles['label']}
        {...getLabelProps()}
        data-testid="table-row-text"
      >
        {label ?? props.value}
      </Text>
      <Flex
        display="inline-flex"
        alignItems="center"
        justifyContent="center"
        flexShrink="0"
        className="checkbox"
        __css={radioStyle['control']}
        {...getCheckboxProps()}
      />
    </ClickableLabel>
  );
};

export default RadioTableCard;
