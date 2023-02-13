import { useRef } from 'react';
import { useDialog } from '@react-aria/dialog';
import { useOverlay, useModal, DismissButton } from '@react-aria/overlays';
import { mergeProps } from '@react-aria/utils';
import { Box } from '@chakra-ui/react';
import { AriaDialogProps } from '@react-types/dialog';
import { UseDisclosureProps } from '@chakra-ui/react';

interface PopoverProps extends AriaDialogProps, UseDisclosureProps {
  children: React.ReactNode;
  right?: string;
}

export function Popover(props: PopoverProps) {
  const popoverRef = useRef<HTMLInputElement>(null);
  const { isOpen, onClose, children, right, ...otherProps } = props;

  // Handle events that should cause the popup to close,
  // e.g. blur, clicking outside, or pressing the escape key.
  const { overlayProps } = useOverlay(
    {
      isOpen,
      onClose,
      shouldCloseOnBlur: true,
      isDismissable: true,
    },
    popoverRef
  );

  const { modalProps } = useModal();
  const { dialogProps } = useDialog(otherProps, popoverRef);

  // Add a hidden <DismissButton> component at the end of the popover
  // to allow screen reader users to dismiss the popup easily.
  return (
    <Box
      {...mergeProps(overlayProps, modalProps, dialogProps)}
      ref={popoverRef}
      background="white"
      border="1px solid"
      borderColor="gray.100"
      borderRadius="md"
      position="absolute"
      zIndex="popover"
      inset="auto"
      boxShadow="2xl"
      marginTop="4.625rem"
      padding="6"
      outline="none"
      maxHeight="100%"
      overflowY="auto"
      right={right}
    >
      {children}
      <DismissButton onDismiss={onClose} />
    </Box>
  );
}
