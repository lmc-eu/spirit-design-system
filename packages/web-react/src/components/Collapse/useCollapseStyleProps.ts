import classNames from 'classnames';
import { useClassNamePrefix } from '../../hooks';

export interface CollapseStyles {
  /** className props */
  classProps: {
    root: string;
    content: string;
  };
}

export const useCollapseStyleProps = (isOpen: boolean): CollapseStyles => {
  const collapseClass = useClassNamePrefix('Collapse');
  const collapseContentClass = `${collapseClass}__content`;
  const openClass = isOpen ? 'is-open' : '';
  const rootClass = classNames(collapseClass, openClass);

  return {
    classProps: {
      root: rootClass,
      content: collapseContentClass,
    },
  };
};
