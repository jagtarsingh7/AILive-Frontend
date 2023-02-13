import { PropsWithChildren } from 'react';
import { BoxProps, VStack } from '@chakra-ui/react';
import { HEADER_HEIGHT, SIDEBAR_WIDTH } from '@canvass/shared/utils';
import { motion, type Variants } from 'framer-motion';

export type MiddleBarProps = BoxProps & PropsWithChildren;

const states = {
  COLLAPSED: 'COLLAPSED',
  EXPANDED: 'EXPANDED',
} as const;

const transitionVariants: Variants = {
  [states.EXPANDED]: {
    x: 0,
    opacity: 1,
  },
  [states.COLLAPSED]: {
    x: -60,
    opacity: 0,
    transition: { duration: 0.1 },
  },
};

export const MiddleBar = (props: MiddleBarProps) => {
  const { children, ...boxProps } = props;

  return (
    <VStack
      as={motion.div}
      variants={transitionVariants}
      initial={states.COLLAPSED}
      animate={states.EXPANDED}
      exit={states.COLLAPSED}
      position="fixed"
      top="0"
      bottom="0"
      left="0"
      mt={HEADER_HEIGHT}
      ml={SIDEBAR_WIDTH}
      width={72}
      padding="4"
      borderRight="1px"
      borderColor="gray.200"
      data-testid="app-middle-bar"
      {...boxProps}
    >
      {children}
    </VStack>
  );
};

export default MiddleBar;
