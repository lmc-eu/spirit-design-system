import React from 'react';
import classNames from 'classnames';
import { WithChildren } from '../../types/main';
import { compose } from '../../utils/compose';
import { applyColor, applyClassNamePrefix } from '../../utils/classname';
import { useClassNamePrefix } from '../../hooks/useClassNamePrefix';

type Color = 'primary' | 'secondary' | 'tertiary';

export interface ButtonLinkProps extends WithChildren {
  color: Color;
  href: string;
  target?: string;
  block: boolean;
  disabled: boolean;
  ariaLabel?: string;
  componentClassName: string;
  className?: string;
}

const getButtonColorClassname = (componentClassName: string, color: Color): string =>
  compose(applyColor<Color>(color))(componentClassName);

export const ButtonLink = ({
  color,
  href,
  target,
  block,
  ariaLabel,
  disabled,
  className,
  componentClassName,
  ...restAttributes
}: ButtonLinkProps): JSX.Element => {
  const classNamePrefix = useClassNamePrefix();
  const mainClassName = applyClassNamePrefix(classNamePrefix)(componentClassName);
  const buttonBlockClassName = applyClassNamePrefix(classNamePrefix)('Button--block');
  const buttonDisabledClassName = applyClassNamePrefix(classNamePrefix)('Button--disabled');

  return (
    <a
      {...restAttributes}
      href={href}
      target={target}
      className={classNames(
        mainClassName,
        getButtonColorClassname(mainClassName, color),
        {
          [buttonBlockClassName]: block,
        },
        {
          [buttonDisabledClassName]: disabled,
        },
        className,
      )}
      aria-label={ariaLabel || undefined}
    />
  );
};

ButtonLink.defaultProps = {
  color: 'primary',
  href: '#',
  block: false,
  disabled: false,
  componentClassName: 'Button',
};

export default ButtonLink;
