import { IconProps } from '@chakra-ui/react';
import Icon from './Icon';

const UnfilledCircle = (props: IconProps) => {
  return (
    <Icon viewBox="0 0 20 20" fill="none" {...props}>
      <g clipPath="url(#clip0_3466_438463)">
        <path
          d="M10 18.3334C14.6024 18.3334 18.3333 14.6024 18.3333 10C18.3333 5.39765 14.6024 1.66669 10 1.66669C5.39763 1.66669 1.66667 5.39765 1.66667 10C1.66667 14.6024 5.39763 18.3334 10 18.3334Z"
          strokeWidth="1.66667"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_3466_438463">
          <rect width="20" height="20" fill="white" />
        </clipPath>
      </defs>
    </Icon>
  );
};

export default UnfilledCircle;
