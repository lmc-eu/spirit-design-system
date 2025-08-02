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
  const { drawerAlignmentX = DRAWER_ALIGNMENT_DEFAULT, isOpen = false } = props;

  const drawerClass = useClassNamePrefix('Drawer');
  const drawerAlignXClasses: Record<DrawerAlignmentXType, string> = {
    left: `${drawerClass}--left`,
    right: `${drawerClass}--right`,
  };
  const drawerPanelClass = `${drawerClass}Panel`;
  const drawerContentClass = `${drawerPanelClass}__content`;
  const drawerCloseButtonClass = `${drawerClass}CloseButton`;
  const openClass = 'is-open';

  const classProps = {
    root: classNames(drawerClass, drawerAlignXClasses[drawerAlignmentX], {
      [openClass]: isOpen,
    }),
    panel: drawerPanelClass,
    content: drawerContentClass,
    closeButton: drawerCloseButtonClass,
  };

  return {
    classProps,
  };
};
