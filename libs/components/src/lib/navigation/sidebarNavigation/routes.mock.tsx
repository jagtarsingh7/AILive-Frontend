import type { NavigationConfig } from './types';
import { DatabaseIcon, HomeIcon, LayersIcon } from '@canvass/shared/icons';

const routes: NavigationConfig[] = [
  {
    label: 'Home',
    icon: <HomeIcon />,
    path: '/',
    end: true,
  },
  {
    label: 'Projects',
    icon: <LayersIcon />,
    path: '/projects',
    end: true,
  },
  {
    label: 'Datasets',
    icon: <DatabaseIcon />,
    path: '/datasets',
    end: true,
  },
];

export default routes;
