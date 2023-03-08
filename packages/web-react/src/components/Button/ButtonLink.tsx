import React, { ElementType, ForwardedRef, forwardRef } from 'react';
import classNames from 'classnames';
import { useStyleProps } from '../../hooks';
import { SpiritButtonLinkProps } from '../../types';
import { useButtonAriaProps } from './useButtonAriaProps';
import { useButtonStyleProps } from './useButtonStyleProps';

const defaultProps = {
  color: 'primary',
  href: '#',
  isBlock: false,
  isDisabled: false,
  isSquare: false,
  elementType: 'a',
  size: 'medium',
};

export const ButtonLink = forwardRef<HTMLAnchorElement, SpiritButtonLinkProps>(
  <T extends ElementType = 'a', C = void, S = void>(
    props: SpiritButtonLinkProps<T, C, S>,
    ref: ForwardedRef<HTMLAnchorElement>,
  ): JSX.Element => {
    const { elementType: ElementTag = 'a', children, ...restProps } = props;
    const { buttonProps } = useButtonAriaProps(props);
    const { classProps, props: modifiedProps } = useButtonStyleProps(restProps);
    const { styleProps, props: otherProps } = useStyleProps(modifiedProps);

    return (
      <ElementTag
        {...otherProps}
        {...styleProps}
        {...buttonProps}
        ref={ref}
        className={classNames(classProps, styleProps.className)}
      >
        {children}
      </ElementTag>
    );
  },
);

ButtonLink.defaultProps = defaultProps;

export default ButtonLink;
