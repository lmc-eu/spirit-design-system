import classNames from 'classnames';
import React, { ElementType } from 'react';
import { useClassNamePrefix, useStyleProps } from '../../hooks';
import { SpiritTruncateProps } from '../../types/truncate';
import { useTruncateStyleProps } from './useTruncateStyleProps';

const defaultProps = {
  elementType: 'span',
};

const UNSTABLE_Truncate = <T extends ElementType = 'span'>(props: SpiritTruncateProps<T>): JSX.Element => {
  const propsWithDefaults = { ...defaultProps, ...props };
  const { children, elementType: ElementTag = 'span', ...restProps } = propsWithDefaults;

  const { classProps, props: modifiedProps, styleProps: truncateStyle } = useTruncateStyleProps(restProps);
  const { styleProps, props: otherProps } = useStyleProps(modifiedProps);

  const truncateStyleProps = {
    style: {
      ...styleProps.style,
      ...truncateStyle,
    },
  };

  return (
    <ElementTag
      {...otherProps}
      {...truncateStyleProps}
      className={classNames(useClassNamePrefix(classProps), styleProps.className)}
    >
      {children}
    </ElementTag>
  );
};

export default UNSTABLE_Truncate;
