import { motion } from 'framer-motion';
import { Box } from '@chakra-ui/react';
import {
  HEADER_HEIGHT,
  MIDDLE_BAR_AND_SIDEBAR_WIDTH,
  SIDEBAR_WIDTH,
} from '@canvass/shared/utils';
import { PropsWithChildren } from 'react';

export interface MainProps extends PropsWithChildren {
  isSidebarExpanded: boolean;
  hasMiddleBar: boolean;
}

export function Main(props: MainProps) {
  const { isSidebarExpanded, hasMiddleBar, children } = props;

  return (
    <Box
      as={motion.div}
      variants={{
        expanded: {
          marginLeft: hasMiddleBar
            ? MIDDLE_BAR_AND_SIDEBAR_WIDTH
            : `var(--chakra-space-${SIDEBAR_WIDTH})`,
        },
        closed: {
          marginLeft: 0,
        },
      }}
      initial={false}
      animate={isSidebarExpanded ? 'expanded' : 'closed'}
      pt={HEADER_HEIGHT}
      ml={SIDEBAR_WIDTH}
      children={children}
    />
  );
}

export default Main;
