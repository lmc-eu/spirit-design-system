import {
  ChildrenProps,
  ClickEvent,
  SpiritAnchorElementProps,
  SpiritButtonElementProps,
  SpiritDialogElementProps,
  SpiritElementProps,
  SpiritLItemElementProps,
  SpiritSpanElementProps,
  SpiritUListElementProps,
  TransferProps,
} from './shared';

export interface HeaderProps extends ChildrenProps, TransferProps {
  /* Identification of the header component */
  id: string;
}

export interface SpiritHeaderProps extends HeaderProps {
  /* Whether is Header inverted */
  isInverted?: boolean;
  /* Whether is Header simple */
  isSimple?: boolean;
}

export type HeaderActionsColorType = 'primary' | 'secondary';
export type HeaderColorType = 'inverted' | 'transparent';

export type HeaderDialogHandlingProps = {
  isOpen: boolean;
  onClose: (event: ClickEvent) => void;
};

export type HeaderMobileActionsHandlingProps = {
  isOpen: boolean;
  onOpen: (event: ClickEvent) => void;
};

export interface HeaderModernProps extends SpiritElementProps, ChildrenProps {
  color?: HeaderColorType;
  isSimple?: boolean;
}

export interface HeaderButtonProps extends SpiritButtonElementProps, ChildrenProps {}

export interface HeaderDesktopActionsProps extends SpiritElementProps, ChildrenProps {
  color?: HeaderActionsColorType;
}

export interface HeaderDialogProps extends SpiritDialogElementProps, HeaderDialogHandlingProps, ChildrenProps {
  id: string;
}

export interface HeaderDialogActionsProps extends SpiritElementProps, ChildrenProps {
  color?: HeaderActionsColorType;
}

export interface HeaderDialogButtonProps extends SpiritButtonElementProps, ChildrenProps {}

export interface HeaderDialogCloseButtonProps extends Omit<SpiritButtonElementProps, 'children'> {
  label?: string;
}

export interface HeaderDialogLinkProps extends SpiritAnchorElementProps, ChildrenProps {
  isCurrent?: boolean;
}

export interface HeaderDialogNavProps extends SpiritUListElementProps, ChildrenProps {}

export interface HeaderDialogNavItemProps extends SpiritLItemElementProps, ChildrenProps {}

export interface HeaderDialogTextProps extends SpiritSpanElementProps, ChildrenProps {}

export interface HeaderLinkProps extends SpiritAnchorElementProps, ChildrenProps {
  isCurrent?: boolean;
}

export interface HeaderMobileActionsProps extends SpiritElementProps, HeaderMobileActionsHandlingProps, ChildrenProps {
  dialogId: string;
  menuToggleLabel?: string;
}

export interface HeaderNavProps extends SpiritUListElementProps, ChildrenProps {}

export interface HeaderNavItemProps extends SpiritLItemElementProps, ChildrenProps {}
