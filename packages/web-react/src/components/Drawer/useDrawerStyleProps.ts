import classNames from 'classnames';
import { useClassNamePrefix } from '../../hooks';
import { AlignmentXDictionaryType } from '../../types';

export interface DrawerStylesProps {
  drawerAlignment: AlignmentXDictionaryType;
}

export interface DrawerStylesReturn {
  /** className props */
  classProps: {
    root: string;
    panel: string;
  };
}

export function useDrawerStyleProps(props: Partial<DrawerStylesProps>): DrawerStylesReturn {
  const { drawerAlignment } = props;
  const drawerClass = useClassNamePrefix('Drawer');
  const drawerAlignClasses = {
    left: `${drawerClass}--left`,
    center: `${drawerClass}--center`,
    right: `${drawerClass}--right`,
  };
  const drawerPanelClass = `${drawerClass}Panel`;

  const classProps = {
    root: classNames(drawerClass, drawerAlignment && { [drawerAlignClasses[drawerAlignment]]: drawerAlignment }),
    panel: classNames(drawerPanelClass, {}),
  };

  return {
    classProps,
  };
}
