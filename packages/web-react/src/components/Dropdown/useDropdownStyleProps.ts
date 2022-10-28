import classNames from 'classnames';
import { useClassNamePrefix } from '../../hooks';

export interface UseDropdownStylePropsProps {
  /** open state */
  isOpen: boolean;
}

export interface UseDropdownStylePropsReturn {
  /** className props */
  wrapperClassName: string;
  /** className props */
  triggerClassName: string;
}

export const useDropdownStyleProps = ({ isOpen }: UseDropdownStylePropsProps): UseDropdownStylePropsReturn => {
  const wrapperClass = useClassNamePrefix('Dropdown');
  const openClass = isOpen ? 'is-open' : '';
  const expandedClass = isOpen ? 'is-expanded' : '';
  const wrapperClassName = classNames(wrapperClass, openClass);
  const triggerClassName = classNames(expandedClass);

  return {
    wrapperClassName,
    triggerClassName,
  };
};
