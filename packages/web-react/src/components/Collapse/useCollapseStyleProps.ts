import classNames from 'classnames';
import { useClassNamePrefix } from '../../hooks';

export interface CollapseStyles {
  /** className props */
  classProps: {
    root: string;
    content: string;
    trigger: string;
  };
}

export const useCollapseStyleProps = (isCollapsed: boolean): CollapseStyles => {
  const collapseClass = useClassNamePrefix('Collapse');
  const collapseContentClass = `${collapseClass}__content`;
  const collapsedClass = isCollapsed ? 'is-collapsed' : '';
  const expandedClass = isCollapsed ? 'is-expanded' : '';
  const rootClass = classNames(collapseClass, collapsedClass);

  return {
    classProps: {
      root: rootClass,
      content: collapseContentClass,
      trigger: expandedClass,
    },
  };
};
