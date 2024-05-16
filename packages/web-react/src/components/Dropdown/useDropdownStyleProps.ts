import classNames from 'classnames';
import { useClassNamePrefix } from '../../hooks';
import { DropdownStyleProps } from '../../types';

export interface UseDropdownStylePropsReturn {
  classProps: {
    root: string;
    trigger: string;
    popover: string;
  };
  props: DropdownStyleProps;
}

export const useDropdownStyleProps = (props: DropdownStyleProps = { isOpen: false }): UseDropdownStylePropsReturn => {
  const { isOpen, ...modifiedProps } = props;

  const dropdownRootClass = useClassNamePrefix('Dropdown');
  const dropdownPopoverClass = `${dropdownRootClass}Popover`;
  const expandedClass = isOpen ? 'is-expanded' : '';
  const openClass = isOpen ? 'is-open' : '';

  const popoverClass = classNames(dropdownPopoverClass, openClass);
  const triggerClass = classNames(expandedClass);

  return {
    classProps: {
      root: dropdownRootClass,
      trigger: triggerClass,
      popover: popoverClass,
    },
    props: modifiedProps,
  };
};
