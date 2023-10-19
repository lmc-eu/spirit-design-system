import classNames from 'classnames';
import { Placements } from '../../constants';
import { useClassNamePrefix } from '../../hooks';
import { DropdownProps, SpiritDropdownProps } from '../../types';
import { kebabCaseToCamelCase } from '../../utils';

export interface UseDropdownStyleProps extends SpiritDropdownProps {
  /** open state */
  isOpen: boolean;
}

export interface UseDropdownStylePropsReturn {
  classProps: {
    wrapperClassName: string;
    triggerClassName: string;
    contentClassName: string;
  };
  props: DropdownProps;
}

export const useDropdownStyleProps = (
  props: UseDropdownStyleProps = { isOpen: false },
): UseDropdownStylePropsReturn => {
  const { isOpen, placement = Placements.BOTTOM_LEFT, ...modifiedProps } = props;

  const dropdownClass = useClassNamePrefix('Dropdown');
  const dropdownWrapperClass = `${dropdownClass}Wrapper`;
  const dropdownPlacementClass = `${dropdownClass}--${kebabCaseToCamelCase(placement)}`;
  const expandedClass = isOpen ? 'is-expanded' : '';
  const openClass = isOpen ? 'is-open' : '';

  const dropdownClassName = classNames(dropdownClass, dropdownPlacementClass, openClass);
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
