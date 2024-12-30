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
    dialog: string;
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
  const drawerDialogClass = `${drawerClass}Dialog`;

  const classProps = {
    root: classNames(drawerClass, drawerAlignment && { [drawerAlignClasses[drawerAlignment]]: drawerAlignment }),
    dialog: classNames(drawerDialogClass, {}),
  };

  return {
    classProps,
  };
}
