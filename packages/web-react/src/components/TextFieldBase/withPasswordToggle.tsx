// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
/*
error TS2322: Type 'Omit<T, "hasPasswordToggle"> & { type: string; }' is not assignable to type 'IntrinsicAttributes & T'.
  Type 'Omit<T, "hasPasswordToggle"> & { type: string; }' is not assignable to type 'T'.
    'T' could be instantiated with an arbitrary type which could be unrelated to 'Omit<T, "hasPasswordToggle"> & { type: string; }'.
*/

'use client';

import React, { ComponentType, ForwardedRef } from 'react';
import { PasswordToggleAdornmentProp } from '../../types/shared/adornments';
import TextFieldBasePasswordToggle from './TextFieldBasePasswordToggle';
import { usePasswordToggle } from './usePasswordToggle';

function withPasswordToggle<T extends PasswordToggleAdornmentProp>(WrappedComponent: ComponentType<T>) {
  const displayName = WrappedComponent.displayName || WrappedComponent.name || 'Component';

  const ComponentWithPasswordToggle = (props: T, ref: ForwardedRef<HTMLInputElement | HTMLTextAreaElement>) => {
    const { isPasswordShown, passwordToggle } = usePasswordToggle();
    const { hasPasswordToggle, ...restProps } = props;

    return hasPasswordToggle ? (
      <TextFieldBasePasswordToggle isPasswordShown={isPasswordShown} onToggleClick={passwordToggle}>
        <WrappedComponent {...restProps} type={isPasswordShown ? 'text' : 'password'} ref={ref} />
      </TextFieldBasePasswordToggle>
    ) : (
      <WrappedComponent {...restProps} ref={ref} />
    );
  };

  ComponentWithPasswordToggle.displayName = `withPasswordToggle(${displayName})`;

  return ComponentWithPasswordToggle;
}

export default withPasswordToggle;
