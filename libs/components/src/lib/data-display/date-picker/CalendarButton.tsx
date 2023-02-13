import { useButton } from '@react-aria/button';
import Button from '../../forms/button/Button';
import { useRef } from 'react';
import { AriaButtonProps } from '@react-types/button';

export function CalendarButton(props: AriaButtonProps<'button'>) {
  const { children } = props;
  const buttonRef = useRef<HTMLButtonElement>(null);
  const { buttonProps } = useButton(props, buttonRef);
  return (
    <Button
      {...buttonProps}
      ref={buttonRef}
      size="sm"
      variant="ghost"
      color="gray.500"
    >
      {children}
    </Button>
  );
}

export function FieldButton(props: AriaButtonProps<'button'>) {
  const { children } = props;
  const buttonRef = useRef<HTMLButtonElement>(null);
  const { buttonProps } = useButton(props, buttonRef);
  return (
    <Button
      {...buttonProps}
      ref={buttonRef}
      pl="2"
      pr="0"
      variant="ghost"
      color="gray.500"
      _hover={{
        background: '',
      }}
      _active={{
        background: '',
        borderColor: '',
      }}
      _focusWithin={{
        borderColor: '',
        boxShadow: 'none',
      }}
    >
      {children}
    </Button>
  );
}
