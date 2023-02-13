import type { ReactElement } from 'react';

import { Flex, Text } from '@chakra-ui/react';
import { AlertCircleIcon } from '@canvass/shared/icons';
import Badge from '../../data-display/badge/Badge';
import Button, { type ButtonProps } from '../../forms/button/Button';
import Tooltip from '../../overlay/tooltip/Tooltip';

export interface NavButtonProps extends ButtonProps {
  icon: ReactElement;
  badge?: string;
  hasError?: boolean;
  errorTooltip?: string;
  'data-testid'?: string;
}

const NavButton = (props: NavButtonProps) => {
  const {
    icon,
    badge,
    isActive,
    isDisabled,
    hasError,
    errorTooltip,
    'data-testid': testId,
    children,
    ...buttonProps
  } = props;

  return (
    <Tooltip
      label={hasError && errorTooltip}
      placement="right"
      variant="dark"
      offset={[0, 14]}
      hasArrow
    >
      <Button
        variant="middleBarNav"
        size="lg"
        leftIcon={icon}
        width="full"
        minH="16"
        justifyContent="start"
        isActive={isActive}
        isDisabled={isDisabled}
        colorScheme={hasError ? 'warning' : 'primary'}
        data-testid={testId && `${testId}-button`}
        {...buttonProps}
      >
        <Flex flex="1" alignItems="center" justifyContent="space-between">
          <Text
            as="span"
            maxW={hasError || badge ? '32' : 'full'}
            wordBreak="break-all"
            whiteSpace="normal"
            noOfLines={1}
            data-testid={testId && `${testId}-button-title`}
          >
            {children}
          </Text>
          {hasError && (
            <AlertCircleIcon
              data-testid={testId && `${testId}-button-alert-icon`}
              className="alert-icon"
            />
          )}
          {!hasError && badge && (
            <Badge
              variant="square"
              size="lg"
              data-testid={testId && `${testId}-button-badge`}
            >
              {badge}
            </Badge>
          )}
        </Flex>
      </Button>
    </Tooltip>
  );
};

export default NavButton;
