import { Flex, keyframes } from '@chakra-ui/react';
import { CanvassLoaderIcon } from '@canvass/shared/icons';

const appearLogo = keyframes`
  0%,
  5%,
  95%,
  100% {
    stroke-dasharray: 20 100;
    fill: transparent;
  }
  25%,
  75% {
    stroke-dasharray: 100 20;
    fill: transparent;
  }
  35%,
  65% {
    fill: var(--chakra-colors-primary-800);
    stroke-dasharray: 100 0;
  }
  0% {
    opacity: 0.2;
  }
  40%,
  60% {
    opacity: 1;
  }
  100% {
    opacity: 0.2;
  }
`;

export function PageLoader() {
  const animation = `${appearLogo} 3s linear infinite`;
  return (
    <Flex
      height="100vh"
      width="100vw"
      justifyContent="center"
      alignItems="center"
    >
      <CanvassLoaderIcon
        viewBox="0 0 88 13"
        height="80"
        width="80"
        fill="transparent"
        stroke="primary.800"
        strokeWidth={0.3}
        strokeDasharray="100 100"
        animation={animation}
      />
    </Flex>
  );
}

export default PageLoader;
