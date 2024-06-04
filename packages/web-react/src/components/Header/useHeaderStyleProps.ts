import classNames from 'classnames';
import { useClassNamePrefix } from '../../hooks';
import { HeaderColorType, HeaderActionsColorType } from '../../types';
import { HEADER_COLOR_DEFAULT, HEADER_ACTIONS_COLOR_DEFAULT } from './constants';

export interface UseHeaderStyleProps {
  color?: HeaderColorType;
  hasActionsAtEnd?: boolean;
  isSimple?: boolean;
  actionsColor?: HeaderActionsColorType;
  isCurrentLink?: boolean;
}
export interface UseHeaderStyleReturn {
  classProps: {
    root: string;
    headerButton: string;
    headerDesktopActions: string;
    headerDialog: {
      root: string;
      panel: string;
      content: string;
    };
    headerDialogActions: string;
    headerDialogButton: string;
    headerDialogCloseButton: string;
    headerDialogLink: string;
    headerDialogNav: string;
    headerDialogNavItem: string;
    headerDialogText: string;
    headerLink: string;
    headerMobileActions: string;
    headerNav: string;
    headerNavItem: string;
  };
}

export const useHeaderStyleProps = (
  {
    actionsColor = HEADER_ACTIONS_COLOR_DEFAULT,
    color = HEADER_COLOR_DEFAULT,
    hasActionsAtEnd,
    isCurrentLink,
    isSimple,
  }: UseHeaderStyleProps = {
    actionsColor: HEADER_ACTIONS_COLOR_DEFAULT,
    color: HEADER_COLOR_DEFAULT,
    hasActionsAtEnd: false,
    isCurrentLink: false,
    isSimple: false,
  },
): UseHeaderStyleReturn => {
  const headerClass = useClassNamePrefix('Header');
  const headerColorClass = `${headerClass}--${color}`;
  const headerSimpleClass = `${headerClass}--simple`;
  const headerNavClass = `${headerClass}Nav`;
  const headerNavItemClass = `${headerClass}NavItem`;
  const headerLinkClass = `${headerClass}Link`;
  const headerLinkCurrentClass = `${headerLinkClass}--current`;
  const headerDesktopActionsClass = `${headerClass}DesktopActions`;
  const headerDesktopActionsAtEndClass = `${headerDesktopActionsClass}--end`;
  const headerMobileActionsClass = `${headerClass}MobileActions`;
  const headerDialogClass = `${headerClass}Dialog`;
  const headerDialogPanelClass = `${headerDialogClass}__panel`;
  const headerDialogContentClass = `${headerDialogClass}__content`;
  const headerDialogActionsClass = `${headerClass}DialogActions`;
  const headerDialogActionsColorClass = `${headerDialogActionsClass}--${actionsColor}`;
  const headerDialogCloseButtonClass = `${headerClass}DialogCloseButton`;
  const headerDialogLinkClass = `${headerClass}DialogLink`;
  const headerDialogLinkCurrentClass = `${headerDialogLinkClass}--current`;
  const headerDialogNavClass = `${headerClass}DialogNav`;
  const headerDialogNavItemClass = `${headerClass}DialogNavItem`;
  const headerDialogTextClass = `${headerClass}DialogText`;

  const classProps = {
    root: classNames(headerClass, headerColorClass, { [headerSimpleClass]: isSimple }),
    headerButton: headerLinkClass,
    headerDesktopActions: classNames(headerDesktopActionsClass, { [headerDesktopActionsAtEndClass]: hasActionsAtEnd }),
    headerDialog: {
      root: headerDialogClass,
      panel: headerDialogPanelClass,
      content: headerDialogContentClass,
    },
    headerDialogActions: classNames(headerDialogActionsClass, headerDialogActionsColorClass),
    headerDialogButton: headerDialogLinkClass,
    headerDialogCloseButton: headerDialogCloseButtonClass,
    headerDialogLink: classNames(headerDialogLinkClass, { [headerDialogLinkCurrentClass]: isCurrentLink }),
    headerDialogNav: headerDialogNavClass,
    headerDialogNavItem: headerDialogNavItemClass,
    headerDialogText: headerDialogTextClass,
    headerLink: classNames(headerLinkClass, { [headerLinkCurrentClass]: isCurrentLink }),
    headerMobileActions: headerMobileActionsClass,
    headerNav: headerNavClass,
    headerNavItem: headerNavItemClass,
  };

  return {
    classProps,
  };
};
