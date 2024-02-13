import classNames from 'classnames';
import React, { ElementType } from 'react';
import { useStyleProps } from '../../hooks';
import { SpiritVisuallyHiddenProps } from '../../types/visuallyHidden';
import { useVisuallyHiddenProps } from './useVisuallyHiddenProps';

const VisuallyHidden = <T extends ElementType = 'span'>(props: SpiritVisuallyHiddenProps<T>): JSX.Element => {
  const { children, elementType: ElementTag = 'span', ...rest } = props;
  const { classProps, props: modifiedProps } = useVisuallyHiddenProps(rest);
  const { styleProps, props: transferProps } = useStyleProps(modifiedProps);

  return (
    <ElementTag {...transferProps} {...styleProps} className={classNames(classProps, styleProps.className)}>
      {children}
    </ElementTag>
  );
};

export default VisuallyHidden;
