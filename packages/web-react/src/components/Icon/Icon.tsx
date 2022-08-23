import classNames from 'classnames';
import React from 'react';
import { useStyleProps } from '../../hooks/styleProps';
import { useClassNamePrefix, useIcon } from '../../hooks';
import { IconProps } from '../../types';

const defaultProps = {
  size: 24,
};

export const Icon = ({ name, title, size, ...restProps }: IconProps): JSX.Element => {
  const iconClass = useClassNamePrefix('Icon');
  let icon = useIcon(name);
  const { styleProps, props: otherProps } = useStyleProps(restProps);

  if (title) {
    icon = `<title>${title}</title>${icon}`;
  }

  return (
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore: Incompatible HTMLElement and SVGSVGElement
    <svg
      viewBox={`0 0 ${size} ${size}`}
      fill="currentColor"
      width={size}
      height={size}
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: icon }}
      {...otherProps}
      {...styleProps}
      className={classNames(iconClass, styleProps.className)}
    />
  );
};

Icon.defaultProps = defaultProps;

export default Icon;
