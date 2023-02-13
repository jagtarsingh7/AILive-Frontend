import type { NavLinkItemProps } from './MiddleLinkNavigation/MiddleLinkNavigation';
import type { NavButtonItemProps } from './MiddleButtonNavigation/MiddleButtonNavigation';
import { HomeLineIcon } from '@canvass/shared/icons';
import { noop } from '@canvass/shared/utils';

export const navigationLinkList: NavLinkItemProps[] = [
  {
    title: 'Data Summary',
    icon: <HomeLineIcon />,
    to: '/data-summary',
    end: true,
  },
  {
    title: 'Time Series',
    icon: <HomeLineIcon />,
    to: '/time-series',
    end: true,
  },
  {
    title: 'Correlation Matrix',
    icon: <HomeLineIcon />,
    to: '/correlation-matrix',
    end: true,
  },
];

export const navigationButtonList: NavButtonItemProps[] = [
  {
    title: 'Sampling Rate',
    testId: 'sampling-rate',
    icon: <HomeLineIcon />,
    onClick: noop,
    hasError: true,
  },
  {
    title: 'Train/Test Split',
    testId: 'train-test-split',
    icon: <HomeLineIcon />,
    onClick: noop,
  },
  {
    title: 'Time Interval Removal',
    testId: 'time-interval-removal',
    icon: <HomeLineIcon />,
    onClick: noop,
    badge: '2',
  },
];
