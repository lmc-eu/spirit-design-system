import classNames from 'classnames';
import React, { ElementType, JSXElementConstructor } from 'react';
import { useStyleProps } from '../../hooks/styleProps';
import { useClassNamePrefix } from '../../hooks/useClassNamePrefix';
import { ChildrenProps } from '../../types';
import { applyColor, applySize, applyTheme } from '../../utils/classname';
import { compose } from '../../utils/compose';

type TagColor = 'default' | 'informative' | 'success' | 'warning' | 'danger';

type TagSize = 'xsmall' | 'small' | 'medium';

type TagTheme = 'light' | 'dark';

export interface TagProps<T extends ElementType = 'span'> extends ChildrenProps {
  color?: TagColor;
  size?: TagSize;
  tag?: T | JSXElementConstructor<unknown>;
  theme?: TagTheme;
}

const defaultProps = {
  color: 'default',
  size: 'medium',
  tag: 'span',
  theme: 'dark',
};

// `${componentClassName}--${color}`;
const getTagColorClassname = (className: string, color: TagColor): string =>
  compose(applyColor<TagColor>(color))(className);

// `${componentClassName}--${size}`;
const getTagSizeClassname = (className: string, size: TagSize): string => compose(applySize<TagSize>(size))(className);

// `${componentClassName}--${theme}`;
const getTagThemeClassname = (className: string, theme: TagTheme): string =>
  compose(applyTheme<TagTheme>(theme))(className);

export const Tag = <T extends ElementType = 'span'>(props: TagProps<T>): JSX.Element => {
  const { tag: ElementTag = 'span', color, size, theme, children, ...restProps } = props;
  const { styleProps, props: otherProps } = useStyleProps(restProps);
  const tagClass = useClassNamePrefix('Tag');

  const classes = classNames(
    tagClass,
    getTagColorClassname(tagClass, color as TagColor),
    getTagSizeClassname(tagClass, size as TagSize),
    getTagThemeClassname(tagClass, theme as TagTheme),
    styleProps.className,
  );

  return (
    <ElementTag {...otherProps} {...styleProps} className={classes}>
      {children}
    </ElementTag>
  );
};

Tag.defaultProps = defaultProps;

export default Tag;
