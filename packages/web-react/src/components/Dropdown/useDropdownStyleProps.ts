import classNames from 'classnames';
import { AlignmentPropertyType, useAlignmentClass, useClassNamePrefix } from '../../hooks';
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
  const { alignmentX, alignmentY, isOpen, ...modifiedProps } = props;

  const dropdownRootClass = useClassNamePrefix('Dropdown');
  const dropdownPopoverClass = `${dropdownRootClass}Popover`;
  const expandedClass = isOpen ? 'is-expanded' : '';
  const openClass = isOpen ? 'is-open' : '';

  const rootClass = classNames(dropdownRootClass, {
    [useAlignmentClass(dropdownRootClass, alignmentX as AlignmentPropertyType, 'alignmentX')]: alignmentX,
    [useAlignmentClass(dropdownRootClass, alignmentY as AlignmentPropertyType, 'alignmentY')]: alignmentY,
  });

  const popoverClass = classNames(dropdownPopoverClass, openClass);
  const triggerClass = classNames(expandedClass);

  return {
    classProps: {
      root: rootClass,
      trigger: triggerClass,
      popover: popoverClass,
    },
    props: modifiedProps,
  };
};
