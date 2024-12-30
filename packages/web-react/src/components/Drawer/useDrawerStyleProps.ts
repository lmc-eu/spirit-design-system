import classNames from 'classnames';
import { useClassNamePrefix } from '../../hooks';
import { DrawerAlignmentXType } from '../../types';
import { DRAWER_ALIGNMENT_DEFAULT } from './constants';

export interface UseDrawerStylesProps {
  drawerAlignmentX?: DrawerAlignmentXType;
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
  const { drawerAlignmentX = DRAWER_ALIGNMENT_DEFAULT } = props;

  const drawerClass = useClassNamePrefix('Drawer');
  const drawerAlignXClasses: Record<DrawerAlignmentXType, string> = {
    left: `${drawerClass}--left`,
    right: `${drawerClass}--right`,
  };
  const drawerPanelClass = `${drawerClass}Panel`;
  const drawerContentClass = `${drawerPanelClass}__content`;
  const drawerCloseButtonClass = `${drawerClass}CloseButton`;

  const classProps = {
    root: classNames(drawerClass, drawerAlignXClasses[drawerAlignmentX]),
    panel: drawerPanelClass,
    content: drawerContentClass,
    closeButton: drawerCloseButtonClass,
  };

  return {
    classProps,
  };
};
