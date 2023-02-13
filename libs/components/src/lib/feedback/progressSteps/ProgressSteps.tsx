import { Step, Steps, useSteps } from 'chakra-ui-steps';
import Button from '../../forms/button/Button';
import { DotIcon, CheckIcon } from '@canvass/shared/icons';

import { Flex, FlexProps } from '@chakra-ui/react';

export interface Step {
  label: string;
  description?: string;
  content: React.ReactNode;
}

export interface ProgressStepsProps extends FlexProps {
  steps: Step[];
  resetStepLabel?: string;
  width?: FlexProps['width'];
  hookSteps: ReturnType<typeof useSteps>;
}

export function ProgressSteps({
  steps,
  resetStepLabel,
  width,
  hookSteps,
}: ProgressStepsProps) {
  const { reset, activeStep, setStep } = hookSteps;

  return (
    <Flex flexDir="column" width={'100%'} alignItems="center">
      <Steps
        width={width}
        data-testid="chakra-steps-id"
        labelOrientation="vertical"
        colorScheme="primary"
        checkIcon={CheckIcon}
        activeStep={activeStep}
        onClickStep={(index) => {
          if (index < activeStep) {
            setStep(index);
          }
        }}
        pb={8}
      >
        {steps.map(({ label, description, content }, index) => (
          <Step
            data-testid={`chakra-step-${index}-id`}
            key={label}
            icon={DotIcon}
            color={activeStep === index ? 'primary.700' : 'gray.500'}
            label={label}
            description={description}
          >
            {content}
          </Step>
        ))}
      </Steps>
      {activeStep === steps.length && resetStepLabel && (
        <Flex p={4}>
          <Button mx="auto" size="sm" onClick={reset}>
            {resetStepLabel}
          </Button>
        </Flex>
      )}
    </Flex>
  );
}

export default ProgressSteps;
