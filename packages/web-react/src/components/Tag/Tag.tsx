import React from 'react';
import classNames from 'classnames';
import { WithChildren } from '../../types/main';

type Color = 'default' | 'information' | 'success' | 'warning' | 'danger';

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
  `lmc-Tag--${color}-${theme}`;

export const Tag = ({ color, theme, children }: TagProps): JSX.Element => (
  <span
    className={classNames(
      'lmc-Tag',
      getTagColorAndThemeClassname(color, theme),
    )}
  >
    {children}
  </span>
);

Tag.defaultProps = {
  color: 'primary',
  theme: 'dark',
};

export default Tag;
