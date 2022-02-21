import React, { ElementType } from 'react';
import classNames from 'classnames';
import { compose } from '../../utils/compose';
import { applyColor, applyTheme } from '../../utils/classname';
import { useClassNamePrefix } from '../../hooks/useClassNamePrefix';
import { ChildrenProps } from '../../types';

type Color = 'default' | 'informative' | 'success' | 'warning' | 'danger';

type Theme = 'light' | 'dark';

export interface TagProps extends ChildrenProps {
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
  const tagClass = useClassNamePrefix('Tag');

  const classes = classNames(tagClass, getTagColorAndThemeClassname(tagClass, color, theme), className);

  return (
    <Tag {...restProps} className={classes}>
      {children}
    </Tag>
  );
};

Tag.defaultProps = defaultProps;

export default Tag;
