import { useClassNamePrefix } from '../../hooks';
import { type SpiritEmptyStateProps } from '../../types/emptyState';

export interface EmptyStateStyles<T> {
  classProps: {
    root: string;
    section: string;
  };
  props: T;
}

export function useEmptyStateStyleProps(props: SpiritEmptyStateProps): EmptyStateStyles<SpiritEmptyStateProps> {
  const emptyStateClass = useClassNamePrefix('EmptyState');
  const sectionClass = `${emptyStateClass}__section`;

  return {
    classProps: {
      root: emptyStateClass,
      section: sectionClass,
    },
    props,
  };
}
