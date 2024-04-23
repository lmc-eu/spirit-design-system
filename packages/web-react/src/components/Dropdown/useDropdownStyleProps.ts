import classNames from 'classnames';
import { useClassNamePrefix } from '../../hooks';
import { DropdownStyleProps } from '../../types';

export interface UseDropdownStylePropsReturn {
  classProps: {
    wrapperClassName: string;
    triggerClassName: string;
    contentClassName: string;
  };
  props: DropdownStyleProps;
}

export const useDropdownStyleProps = (props: DropdownStyleProps = { isOpen: false }): UseDropdownStylePropsReturn => {
  const { isOpen, ...modifiedProps } = props;

  const dropdownClass = useClassNamePrefix('Dropdown');
  const dropdownWrapperClass = `${dropdownClass}Wrapper`;
  const expandedClass = isOpen ? 'is-expanded' : '';
  const openClass = isOpen ? 'is-open' : '';

  const dropdownClassName = classNames(dropdownClass, openClass);
  const triggerClassName = classNames(expandedClass);

  return {
    classProps: {
      wrapperClassName: dropdownWrapperClass,
      triggerClassName,
      contentClassName: dropdownClassName,
    },
    props: modifiedProps,
  };
};
