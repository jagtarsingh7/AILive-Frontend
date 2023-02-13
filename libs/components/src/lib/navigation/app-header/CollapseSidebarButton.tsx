import { CollapseMenuIcon, ExpandMenuIcon } from '@canvass/shared/icons';
import { SIDEBAR_WIDTH } from '@canvass/shared/utils';
import IconButton from '../../forms/button/iconButton/IconButton';

export interface CollapseSidebarButtonProps {
  onSidebarToggle: () => void;
  isSidebarExpanded: boolean;
  toggleButtonAriaLabel: string;
  isSidebarDisabled?: boolean;
}

const buttonStyles = {
  borderRadius: 'none',
  color: 'gray.500',
  _focus: {
    ring: 4,
    ringColor: 'primary.100',
  },
  _disabled: {
    stroke: 'gray.300',
    ':hover': {
      bg: 'gray.500',
      stroke: 'gray.300',
    },
  },
  ':hover': {
    bg: 'gray.200',
    stroke: 'gray.600',
  },
};

const CollapseSidebarButton = (props: CollapseSidebarButtonProps) => {
  const {
    isSidebarExpanded,
    isSidebarDisabled,
    onSidebarToggle,
    toggleButtonAriaLabel,
  } = props;

  return (
    <IconButton
      aria-label={toggleButtonAriaLabel}
      minW={SIDEBAR_WIDTH}
      h="full"
      borderRight="1px"
      borderColor="gray.200"
      alignItems="center"
      justifyContent="center"
      onClick={onSidebarToggle}
      variant="ghost"
      colorScheme="gray"
      sx={buttonStyles}
      data-testid="toggle-sidebar-button"
      icon={isSidebarExpanded ? <CollapseMenuIcon /> : <ExpandMenuIcon />}
      disabled={isSidebarDisabled}
    />
  );
};

export default CollapseSidebarButton;
