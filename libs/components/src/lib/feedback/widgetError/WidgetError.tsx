import { AlertCircleIcon } from '@canvass/shared/icons';
import EmptyState, { EmptyStateProps } from '../emptyState/EmptyState';

export function WidgetError({
  title,
  description,
  colorScheme,
  icon,
  dataTestId,
}: EmptyStateProps) {
  return (
    <EmptyState
      data-testid={dataTestId}
      title={title}
      description={description}
      colorScheme={colorScheme ?? 'error'}
      icon={icon ?? <AlertCircleIcon />}
    />
  );
}

export default WidgetError;
