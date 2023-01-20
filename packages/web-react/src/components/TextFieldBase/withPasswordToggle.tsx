// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
/*
error TS2322: Type 'Omit<T, "hasPasswordToggle"> & { type: string; }' is not assignable to type 'IntrinsicAttributes & T'.
  Type 'Omit<T, "hasPasswordToggle"> & { type: string; }' is not assignable to type 'T'.
    'T' could be instantiated with an arbitrary type which could be unrelated to 'Omit<T, "hasPasswordToggle"> & { type: string; }'.
*/
import React, { ComponentType } from 'react';
import { PasswordToggleAdormentProp } from '../../types/shared/adorments';
import TextFieldBasePasswordToggle from './TextFieldBasePasswordToggle';
import { usePasswordToggle } from './usePasswordToggle';

function withPasswordToggle<T extends PasswordToggleAdormentProp>(WrappedComponent: ComponentType<T>) {
  const displayName = WrappedComponent.displayName || WrappedComponent.name || 'Component';

  const ComponentWithPasswordToggle = (props: T) => {
    const { isPasswordShown, passwordToggle } = usePasswordToggle();
    const { hasPasswordToggle, ...restProps } = props;

    return hasPasswordToggle ? (
      <TextFieldBasePasswordToggle isPasswordShown={isPasswordShown} onToggleClick={passwordToggle}>
        <WrappedComponent {...restProps} type={isPasswordShown ? 'text' : 'password'} />
      </TextFieldBasePasswordToggle>
    ) : (
      <WrappedComponent {...restProps} />
    );
  };

  ComponentWithPasswordToggle.displayName = `withPasswordToggle(${displayName})`;

  return ComponentWithPasswordToggle;
}

export default withPasswordToggle;
