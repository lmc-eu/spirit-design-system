import React from 'react';
import { SpiritTextFieldBasePasswordToggleProps } from '../../types';
import { Icon } from '../Icon';
import { useTextFieldBasePasswordToggleStyleProps } from './useTextFieldBasePasswordToggleStyleProps';

export const TextFieldBasePasswordToggle = (props: SpiritTextFieldBasePasswordToggleProps): JSX.Element => {
  const { classProps, props: modifiedProps } = useTextFieldBasePasswordToggleStyleProps(props);
  const { children, passwordShown, passwordToggleHandler } = modifiedProps;

  return (
    <div className={classProps.passwordToggle}>
      {children}
      <button
        className={classProps.passwordToggleButton}
        type="button"
        role="switch"
        aria-checked={!!passwordShown}
        aria-label={`${passwordShown ? 'Hide' : 'Show'} password`}
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore TS2322 - Type 'unknown' is not assignable to type 'MouseEventHandler<HTMLButtonElement> | undefined'.
        onClick={passwordToggleHandler}
      >
        <span className={classProps.passwordToggleIcon}>
          <Icon name={`visibility-${passwordShown ? 'off' : 'on'}`} />
        </span>
      </button>
    </div>
  );
};

export default TextFieldBasePasswordToggle;
