import classNames from 'classnames';
import { useClassNamePrefix } from '../../hooks';
import { SpiritCollapseProps } from '../../types';

export interface CollapseStylePropsReturn {
  /** className props */
  wrapperClassName: string;
  /** className props */
  contentClassName: string;
  /** className props */
  triggerClassName: string;
}

export const useCollapseStyleProps = ({ isCollapsed }: SpiritCollapseProps): CollapseStylePropsReturn => {
  const wrapperClass = useClassNamePrefix('Collapse');
  const contentClass = useClassNamePrefix('Collapse__content');
  const collapsedClass = isCollapsed ? 'is-collapsed' : '';
  const expandedClass = isCollapsed ? 'is-expanded' : '';
  const wrapperClassName = classNames(wrapperClass, collapsedClass);
  const contentClassName = classNames(contentClass);
  const triggerClassName = classNames(expandedClass);

  return {
    wrapperClassName,
    contentClassName,
    triggerClassName,
  };
};
