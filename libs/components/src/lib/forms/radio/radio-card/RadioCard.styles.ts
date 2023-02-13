import { createMultiStyleConfigHelpers } from '@chakra-ui/styled-system';

import {
  baseStyle,
  checkedVariant,
} from '../../checkbox/checkbox-card/CheckboxCard.styles';

const parts = ['item', 'label', 'text'];

const { defineMultiStyleConfig } = createMultiStyleConfigHelpers(parts);

const variants = {
  checked: checkedVariant,
};

// The styles all RadioCard button have in common
const RadioCardStyles = defineMultiStyleConfig({
  baseStyle,
  variants,
});

export default RadioCardStyles;
