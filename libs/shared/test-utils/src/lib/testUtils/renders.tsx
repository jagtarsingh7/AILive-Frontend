import type { ReactElement, PropsWithChildren } from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import { ChakraProvider } from '@chakra-ui/react';
import userEvent from '@testing-library/user-event';

export const renderWithTheme = (ui: ReactElement) => {
  return render(ui, { wrapper: ChakraProvider });
};

export const renderWithRoute = (
  ui: ReactElement,
  initialEntries: string[] = ['/']
) => {
  const Wrapper = ({ children }: PropsWithChildren) => (
    <MemoryRouter initialEntries={initialEntries}>
      <ChakraProvider>{children}</ChakraProvider>
    </MemoryRouter>
  );

  return render(ui, { wrapper: Wrapper });
};

type RenderFunctionType = ReturnType<
  typeof renderWithRoute | typeof renderWithTheme
>;

export function setup(renderFunction: RenderFunctionType) {
  return {
    user: userEvent.setup(),
    ...renderFunction,
  };
}
