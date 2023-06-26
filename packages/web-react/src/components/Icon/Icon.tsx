import React from 'react';
import { useIcon, useStyleProps } from '../../hooks';
import { IconProps } from '../../types';

const defaultProps = {
  ariaHidden: true,
  boxSize: 24,
};

export const Icon = (props: IconProps): JSX.Element => {
  const { boxSize, name, title, ariaHidden, ...restProps } = props;
  let icon = useIcon(name);
  const { styleProps, props: otherProps } = useStyleProps(restProps);

  if (title) {
    icon = `<title>${title}</title>${icon}`;
  }

  return (
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore: Incompatible HTMLElement and SVGSVGElement
    <svg
      viewBox="0 0 24 24"
      fill="none"
      width={boxSize}
      height={boxSize}
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: icon }}
      aria-hidden={ariaHidden}
      {...otherProps}
      {...styleProps}
      className={styleProps.className}
    />
  );
};

Icon.defaultProps = defaultProps;

export default Icon;
