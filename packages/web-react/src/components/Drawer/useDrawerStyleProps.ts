import classNames from 'classnames';
import { useClassNamePrefix } from '../../hooks';
import { DrawerAlignmentXType, DrawerPanelProps } from '../../types';
import { DRAWER_ALIGNMENT_DEFAULT } from './constants';

export interface UseDrawerStylesProps extends DrawerPanelProps {
  drawerAlignmentX?: DrawerAlignmentXType;
  isOpen?: boolean;
}

export interface UseDrawerStylesReturn {
  /** className props */
  classProps: {
    root: string;
    panel: string;
    content: string;
    closeButton: string;
  };
}

export const useDrawerStyleProps = (props: UseDrawerStylesProps = {}): UseDrawerStylesReturn => {
  const { drawerAlignmentX = DRAWER_ALIGNMENT_DEFAULT, isOpen } = props;

  const drawerClass = useClassNamePrefix('Drawer');
  const drawerAlignXClasses: Record<DrawerAlignmentXType, string> = {
    left: `${drawerClass}--left`,
    right: `${drawerClass}--right`,
  };
  const drawerClassIsOpen = isOpen ? 'is-open' : '';
  const drawerPanelClass = `${drawerClass}Panel`;
  const drawerContentClass = `${drawerPanelClass}__content`;
  const drawerCloseButtonClass = `${drawerClass}CloseButton`;

  const classProps = {
    root: classNames(drawerClass, drawerClassIsOpen, drawerAlignXClasses[drawerAlignmentX]),
    panel: drawerPanelClass,
    content: drawerContentClass,
    closeButton: drawerCloseButtonClass,
  };

  return {
    classProps,
  };
};
