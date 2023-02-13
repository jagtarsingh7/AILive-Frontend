import {
  Tag as ChakraTag,
  TagLabel as ChakraTagLabel,
  TagCloseButton as ChakraTagCloseButton,
  TagProps as ChakraTagProps,
  TagCloseButtonProps as ChakraTagCloseButtonProps,
  TagLabelProps as ChakraTagLabelProps,
  TagRightIcon as ChakraTagRightIcon,
  TagLeftIcon as ChakraLeftIcon,
  Center,
  useMultiStyleConfig,
} from '@chakra-ui/react';

interface TagProps extends ChakraTagProps {
  variant?: 'outline';
  colorScheme?: 'gray';
}

const Tag = (props: TagProps) => {
  return <ChakraTag {...props} />;
};

const CloseButton = (props: ChakraTagCloseButtonProps) => {
  return <ChakraTagCloseButton {...props} />;
};

const Label = (props: ChakraTagLabelProps) => {
  return <ChakraTagLabel {...props} />;
};

const Count = ({ count }: { count: number }) => {
  const styles = useMultiStyleConfig('Tag');
  return <Center __css={styles['count']}>{count}</Center>;
};

Tag.CloseButton = CloseButton;
Tag.Label = Label;
Tag.Count = Count;
Tag.RightIcon = ChakraTagRightIcon;
Tag.LeftIcon = ChakraLeftIcon;

export default Tag;
