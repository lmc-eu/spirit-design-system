import classNames from 'classnames';
import { SpiritDropdownProps, DropdownProps, DropdownPlacements } from '../../types';
import { useClassNamePrefix } from '../../hooks';

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
  props: UseDropdownStyleProps = { isOpen: false, isFullWidth: false },
): UseDropdownStylePropsReturn => {
  const { isOpen, isFullWidth, placement = DropdownPlacements.BOTTOM_LEFT, ...modifiedProps } = props;
  const dropdownClass = useClassNamePrefix('Dropdown');
  const dropdownWrapperClass = `${dropdownClass}Wrapper`;
  /** @deprecated Will be removed in next major version */
  const dropdownFullWidthClass = `${dropdownClass}--fullWidth`;
  const dropdownBottomClass = `${dropdownClass}--bottom`;
  const dropdownTopClass = `${dropdownClass}--top`;
  const dropdownLeftClass = `${dropdownClass}--left`;
  const dropdownRightClass = `${dropdownClass}--right`;
  const expandedClass = isOpen ? 'is-expanded' : '';
  const openClass = isOpen ? 'is-open' : '';
  const dropdownPlacementClassNames = {
    'bottom-left': classNames(dropdownBottomClass, dropdownLeftClass),
    'bottom-right': classNames(dropdownBottomClass, dropdownRightClass),
    'top-left': classNames(dropdownTopClass, dropdownLeftClass),
    'top-right': classNames(dropdownTopClass, dropdownRightClass),
  };
  const dropdownClassName = classNames(dropdownClass, openClass, {
    /** @deprecated Will be removed in next major version */
    [dropdownFullWidthClass]: isFullWidth,
    [dropdownPlacementClassNames[placement]]: placement,
  });
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
