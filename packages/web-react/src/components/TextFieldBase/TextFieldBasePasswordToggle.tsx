'use client';

import React from 'react';
import { SpiritTextFieldBasePasswordToggleProps } from '../../types';
import { Icon } from '../Icon';
import { useTextFieldBasePasswordToggleStyleProps } from './useTextFieldBasePasswordToggleStyleProps';

const TextFieldBasePasswordToggle = (props: SpiritTextFieldBasePasswordToggleProps): JSX.Element => {
  const { children, isPasswordShown, onToggleClick, isDisabled } = props;
  const { classProps } = useTextFieldBasePasswordToggleStyleProps();

  return (
    <div className={classProps.passwordToggle}>
      {children}
      <button
        className={classProps.passwordToggleButton}
        type="button"
        role="switch"
        aria-checked={!!isPasswordShown}
        aria-label={`${isPasswordShown ? 'Hide' : 'Show'} password`}
        onClick={() => onToggleClick()}
        disabled={isDisabled}
      >
        <span className={classProps.passwordToggleIcon}>
          <Icon name={`visibility-${isPasswordShown ? 'off' : 'on'}`} />
        </span>
      </button>
    </div>
  );
};

export default TextFieldBasePasswordToggle;
