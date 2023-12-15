import { warning } from '@lmc-eu/spirit-common/utilities';
import React from 'react';
import { useIcon, useStyleProps } from '../../hooks';
import { IconProps } from '../../types';
import { htmlParser } from '../../utils/htmlParser';

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

  // @deprecated Usage of `html-react-parser` will be required in the next major version.
  if (typeof window === 'undefined' && htmlParser == null) {
    warning(
      false,
      'Icon component is not supported in SSR without use of `html-react-parser`. Please install, missing peer dependency.',
    );
  }

  return (
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore: Incompatible HTMLElement and SVGSVGElement
    <svg
      viewBox="0 0 24 24"
      fill="none"
      width={boxSize}
      height={boxSize}
      aria-hidden={ariaHidden}
      // @deprecated Usage of dangerouslySetInnerHTML is discouraged due to support of SSR and will be removed in the next major version.
      {...(typeof window !== 'undefined' ? { dangerouslySetInnerHTML: { __html: icon } } : {})}
      {...otherProps}
      {...styleProps}
      className={styleProps.className}
    >
      {typeof window === 'undefined' && typeof htmlParser === 'function' ? htmlParser(icon) : null}
    </svg>
  );
};

Icon.defaultProps = defaultProps;

export default Icon;
