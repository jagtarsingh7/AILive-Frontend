import { screen } from '@testing-library/react';
import { Flex } from '@chakra-ui/react';
import { renderWithStepsTheme } from '@canvass/shared/test-utils';

import Text from '../../typography/text/Text';
import ProgressSteps from './ProgressSteps';

const Content = (
  <Flex py={4}>
    <Text p={1}>Body of the step.</Text>
  </Flex>
);

const steps = [
  {
    label: 'Your details',
    description: 'Please provide your name and email',
    content: Content,
  },
  {
    label: 'Company details',
    description: 'A few details about your company',
    content: Content,
  },
  {
    label: 'Invite your team',
    description: 'Start collaborating with your team',
    content: Content,
  },
];

describe('ProgressSteps', () => {
  function renderProgressSteps() {
    const hookSteps = {
      nextStep: jest.fn(),
      prevStep: jest.fn(),
      reset: jest.fn(),
      setStep: jest.fn(),
      activeStep: 2,
    };
    return renderWithStepsTheme(
      <ProgressSteps steps={steps} hookSteps={hookSteps} />
    );
  }

  // TODO: [Sergii] Add tests
  // reference: https://github.com/jeanverster/chakra-ui-steps/blob/7c59690e2fa0f65cb7cca494a2c7ba6d81a174f5/chakra-ui-steps/test/steps.test.tsx
  test.skip('should render the correct number of steps', () => {
    renderProgressSteps();
    const baseElement = screen.getByTestId('steps');
    expect(baseElement).toBeVisible();
  });
});
