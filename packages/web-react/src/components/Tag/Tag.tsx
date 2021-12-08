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
}

const getTagColorAndThemeClassname = (color: Color, theme: Theme): string =>
  `Tag--${color}-${theme}`;

export const Tag = ({ color, theme, children }: TagProps): JSX.Element => (
  <span
    className={classNames('Tag', getTagColorAndThemeClassname(color, theme))}
  >
    {children}
  </span>
);

Tag.defaultProps = {
  color: 'default',
  theme: 'dark',
};

export default Tag;
