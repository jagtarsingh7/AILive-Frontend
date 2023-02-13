import type { BreadcrumbNavigationConfig } from './Breadcrumbs';

const navigations: BreadcrumbNavigationConfig[] = [
  {
    label: 'Home',
    path: '/',
    isHomePath: true,
  },
  {
    label: 'Project',
    path: '/projects/10',
  },
  {
    label: 'My Cool Experiment',
    path: '/projects/10/experiments/3/data-analysis',
  },
];

export default navigations;
