import React, { ElementType } from 'react';
import classNames from 'classnames';
import { WithChildren } from '../../types/main';
import { compose } from '../../utils/compose';
import { applyColor, applyTheme, applyClassNamePrefix } from '../../utils/classname';
import { useClassNamePrefix } from '../../hooks/useClassNamePrefix';

type Color = 'default' | 'informative' | 'success' | 'warning' | 'danger';

type Theme = 'light' | 'dark';

export interface TagProps extends WithChildren {
  tag: ElementType;
  color: Color;
  theme: Theme;
  className?: string;
}

const defaultProps = {
  color: 'default',
  theme: 'dark',
  tag: 'span',
};

// `${componentClassName}--${color}-${theme}`;
const getTagColorAndThemeClassname = (className: string, color: Color, theme: Theme): string =>
  compose(applyTheme<Theme>(theme), applyColor<Color>(color))(className);

export const Tag = ({ tag: Tag, color, theme, className, children, ...restProps }: TagProps): JSX.Element => {
  const tagClass = 'Tag';
  const classNamePrefix = useClassNamePrefix();
  const mainClassName = applyClassNamePrefix(classNamePrefix)(tagClass);

  const classes = classNames(mainClassName, getTagColorAndThemeClassname(mainClassName, color, theme), className);

  return (
    <Tag {...restProps} className={classes}>
      {children}
    </Tag>
  );
};

Tag.defaultProps = defaultProps;

export default Tag;
