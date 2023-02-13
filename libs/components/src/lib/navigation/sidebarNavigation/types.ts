import { IconButtonProps } from '@chakra-ui/react';

export interface NavigationConfig {
  path: string;
  label: string;
  icon: IconButtonProps['icon'];
  end: boolean;
}
