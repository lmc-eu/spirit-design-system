import React from 'react';
import { useDeprecationMessage, useIcon, useStyleProps } from '../../hooks';
import { IconProps } from '../../types';

const defaultProps = {
  ariaHidden: true,
  boxSize: 24,
};

export const Icon = (props: IconProps): JSX.Element => {
  const {
    boxSize,
    name,
    title,
    /** @deprecated Will be removed in the next major version. */
    size,
    ariaHidden,
    ...restProps
  } = props;
  let icon = useIcon(name);
  const { styleProps, props: otherProps } = useStyleProps(restProps);

  useDeprecationMessage({
    method: 'property',
    trigger: !!size,
    componentName: 'Icon',
    propertyProps: {
      deprecatedName: 'size',
      newName: 'boxSize',
    },
  });

  if (title) {
    icon = `<title>${title}</title>${icon}`;
  }

  return (
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore: Incompatible HTMLElement and SVGSVGElement
    <svg
      viewBox="0 0 24 24"
      fill="none"
      width={size || boxSize}
      height={size || boxSize}
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
