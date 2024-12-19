'use client';

import React, { ElementType, ReactNode } from 'react';
import { StyleProps, TransferProps } from '../../../../../../packages/web-react/src/types';
// import { useStyleProps } from './originalStyleProps';
import { useStyleProps } from './newStyleProps';
import classNames from 'classnames';

interface TestComponentProps extends StyleProps, TransferProps {
  elementType?: ElementType | string;
  children?: string | ReactNode;
}

const defaultProps: TestComponentProps = {
  elementType: 'p',
};

const TestComponent = (props: TestComponentProps) => {
  const propsWithDefaults = { ...defaultProps, ...props };
  const { elementType: ElementTag = 'p', children, ...rest } = propsWithDefaults;

  const { styleProps, props: transferProps } = useStyleProps({ ElementTag, ...rest });

  return (
    <ElementTag {...transferProps} {...styleProps}>
      {children}
    </ElementTag>
  );
};

export default TestComponent;
