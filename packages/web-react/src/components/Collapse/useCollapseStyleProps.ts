import classNames from 'classnames';
import { CLASS_NAME_OPEN } from '../../constants';
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
  const openClass = isOpen ? CLASS_NAME_OPEN : '';
  const rootClass = classNames(collapseClass, openClass);

  return {
    classProps: {
      root: rootClass,
      content: collapseContentClass,
    },
  };
};
