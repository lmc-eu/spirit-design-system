import React from 'react';
import classNames from 'classnames';
import { WithChildren } from '../../types/main';

type Color = 'default' | 'informative' | 'success' | 'warning' | 'danger';

type Theme = 'light' | 'dark';

export interface TagProps extends WithChildren {
  /**
   * Emotion color variant.
   */
  color: Color;
  /**
   * Theme
   */
  theme: Theme;
  className?: string;
}

const getTagColorAndThemeClassname = (componentClassName: string, color: Color, theme: Theme): string =>
  `${componentClassName}--${color}-${theme}`;

export const Tag = ({ color, theme, componentClassName, classNames, children }: TagProps): JSX.Element => {
  const classNamePrefix = useClassNamePrefix();

  return (
    <span className={classNames(componentClassName, getTagColorAndThemeClassname(componentClassName, color, theme), className)}>
      {children}
    </span>
  );
};

Tag.defaultProps = {
  color: 'default',
  theme: 'dark',
  componentClassName = 'Tag',
};

export default Tag;
