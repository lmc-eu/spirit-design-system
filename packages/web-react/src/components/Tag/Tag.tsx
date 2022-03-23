import React, { ElementType, JSXElementConstructor } from 'react';
import classNames from 'classnames';
import { filterProps } from '../../utils/filterProps';
import { compose } from '../../utils/compose';
import { applyColor, applyTheme } from '../../utils/classname';
import { useClassNamePrefix } from '../../hooks/useClassNamePrefix';
import { ChildrenProps } from '../../types';

type Color = 'default' | 'informative' | 'success' | 'warning' | 'danger';

type Theme = 'light' | 'dark';

export interface TagProps<T extends ElementType = 'span'> extends ChildrenProps {
  tag?: T | JSXElementConstructor<unknown>;
  color?: Color;
  theme?: Theme;
}

const defaultProps = {
  color: 'default',
  theme: 'dark',
  tag: 'span',
};

// `${componentClassName}--${color}-${theme}`;
const getTagColorAndThemeClassname = (className: string, color: Color, theme: Theme): string =>
  compose(applyTheme<Theme>(theme), applyColor<Color>(color))(className);

export const Tag = <T extends ElementType = 'span'>(props: TagProps<T>): JSX.Element => {
  const { tag: ElementTag = 'span', color, theme, children, ...restProps } = props;
  const tagClass = useClassNamePrefix('Tag');

  const classes = classNames(tagClass, getTagColorAndThemeClassname(tagClass, color as Color, theme as Theme));

  return (
    <ElementTag {...filterProps(restProps)} className={classes}>
      {children}
    </ElementTag>
  );
};

Tag.defaultProps = defaultProps;

export default Tag;
