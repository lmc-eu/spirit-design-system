import classNames from 'classnames';
import { CSSProperties, HTMLAttributes, useContext } from 'react';
import { warning } from '../common/utilities';
import ClassNamePrefixContext from '../context/ClassNamePrefixContext';
import { StyleProps } from '../types';
import { useStyleUtilities } from './useStyleUtilities';

export type UnsafeStylePropsResult = {
  UNSAFE_className?: string;
  UNSAFE_style?: CSSProperties;
  className?: string;
  style?: CSSProperties;
};

export type StylePropsResult = {
  styleProps: HTMLAttributes<HTMLElement> | UnsafeStylePropsResult;
  props: HTMLAttributes<HTMLElement>;
};

export function useStyleProps<T extends StyleProps>(
  props: T,
  additionalUtilities?: Record<string, string>,
): StylePropsResult {
  const classNamePrefix = useContext(ClassNamePrefixContext);
  const { UNSAFE_className, UNSAFE_style, ElementTag, transferClassName, ...otherProps } = props;
  const { styleUtilities, props: modifiedProps } = useStyleUtilities(otherProps, classNamePrefix, additionalUtilities);

  const style: CSSProperties = { ...UNSAFE_style };

  // If component is not Spirit component and is HTML element, we need to handle className and style props
  if (typeof ElementTag === 'string' || !ElementTag?.spiritComponent) {
    // Want to check if className prop exists, but not to define it in StyleProps type
    // @ts-expect-error Property 'className' does not exist on type 'Omit<T, "UNSAFE_className" | "UNSAFE_style">'.
    if (modifiedProps.className) {
      warning(
        false,
        'The className prop is unsafe and is unsupported in Spirit Web React. ' +
          'Please use style props with Spirit Design Tokens, or UNSAFE_className if you absolutely must do something custom. ' +
          'Note that this may break in future versions due to DOM structure changes.',
      );

      // @ts-expect-error same as above, let me live my life
      delete modifiedProps.className;
    }

    // Want to check if style prop exists, but not to define it in StyleProps type
    // @ts-expect-error Property 'style' does not exist on type 'Omit<T, "UNSAFE_className" | "UNSAFE_style">'.
    if (modifiedProps.style) {
      warning(
        false,
        'The style prop is unsafe and is unsupported in Spirit Web React. ' +
          'Please use style props with Spirit Design Tokens, or UNSAFE_style if you absolutely must do something custom. ' +
          'Note that this may break in future versions due to DOM structure changes.',
      );

      // @ts-expect-error same as above, let me live my life
      delete modifiedProps.style;
    }

    const styleProps = {
      style: Object.keys(style).length > 0 ? style : undefined,
      className: classNames(UNSAFE_className, ...styleUtilities, transferClassName) || undefined,
    };

    return {
      styleProps,
      props: { ...(modifiedProps as HTMLAttributes<HTMLElement>) },
    };
  }

  // If component is a Spirit component, we can safely pass the UNSAFE props
  // transferClassName: you can send internal component classes as 'transferClassName' prop to add them to the component className list
  return {
    styleProps: {
      ...(UNSAFE_style !== undefined && { UNSAFE_style }),
      ...((UNSAFE_className !== undefined || styleUtilities !== undefined) && {
        UNSAFE_className: classNames(UNSAFE_className, ...styleUtilities, transferClassName),
      }),
    },
    props: modifiedProps as HTMLAttributes<HTMLElement>,
  };
}
