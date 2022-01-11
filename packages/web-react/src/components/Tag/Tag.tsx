import React from 'react';
import classNames from 'classnames';
import { WithChildren } from '../../types/main';
import { compose } from '../../utils/compose';
import { applyColor, applyTheme, applyClassNamePrefix } from '../../utils/classname';
import { useClassNamePrefix } from '../../hooks/useClassNamePrefix';

type Color = 'default' | 'informative' | 'success' | 'warning' | 'danger';

type Theme = 'light' | 'dark';

export interface TagProps extends WithChildren {
  color: Color;
  theme: Theme;
  className?: string;
  componentClassName: string;
}

// `${componentClassName}--${color}-${theme}`;
const getTagColorAndThemeClassname = (componentClassName: string, color: Color, theme: Theme): string =>
  compose(applyTheme<Theme>(theme), applyColor<Color>(color))(componentClassName);

export const Tag = ({ color, theme, componentClassName, className, children }: TagProps): JSX.Element => {
  const classNamePrefix = useClassNamePrefix();
  const mainClassName = applyClassNamePrefix(classNamePrefix)(componentClassName);

  return (
    <span className={classNames(mainClassName, getTagColorAndThemeClassname(mainClassName, color, theme), className)}>
      {children}
    </span>
  );
};

Tag.defaultProps = {
  color: 'default',
  theme: 'dark',
  componentClassName: 'Tag',
};

export default Tag;
