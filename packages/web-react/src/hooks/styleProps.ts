import { CSSProperties, HTMLAttributes } from 'react';
import { warning } from '../common/utilities';
import { StyleProps } from '../types/shared/style';

export type StylePropsResult = {
  styleProps: HTMLAttributes<HTMLElement>;
  props: HTMLAttributes<HTMLElement>;
};

export function useStyleProps<T extends StyleProps>(props: T): StylePropsResult {
  const { UNSAFE_className, UNSAFE_style, ...otherProps } = props;

  const style: CSSProperties = { ...UNSAFE_style };

  // Want to check if className prop exists, but not to define it in StyleProps type
  // @ts-expect-error Property 'className' does not exist on type 'Omit<T, "UNSAFE_className" | "UNSAFE_style">'.
  if (otherProps.className) {
    warning(
      false,
      'The className prop is unsafe and is unsupported in Spirit Web React. ' +
        'Please use style props with Spirit Design Tokens, or UNSAFE_className if you absolutely must do something custom. ' +
        'Note that this may break in future versions due to DOM structure changes.',
    );

    // @ts-expect-error same as above, let me live my life
    delete otherProps.className;
  }

  // Want to check if style prop exists, but not to define it in StyleProps type
  // @ts-expect-error Property 'style' does not exist on type 'Omit<T, "UNSAFE_className" | "UNSAFE_style">'.
  if (otherProps.style) {
    warning(
      false,
      'The style prop is unsafe and is unsupported in Spirit Web React. ' +
        'Please use style props with Spirit Design Tokens, or UNSAFE_style if you absolutely must do something custom. ' +
        'Note that this may break in future versions due to DOM structure changes.',
    );

    // @ts-expect-error same as above, let me live my life
    delete otherProps.style;
  }

  const styleProps = {
    style: Object.keys(style).length > 0 ? style : undefined,
    className: UNSAFE_className,
  };

  return {
    styleProps,
    props: otherProps,
  };
}
