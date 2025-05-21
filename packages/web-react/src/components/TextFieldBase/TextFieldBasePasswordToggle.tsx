'use client';

import React from 'react';
import { Sizes } from '../../constants';
import { SpiritTextFieldBasePasswordToggleProps } from '../../types';
import { Icon } from '../Icon';
import { useTextFieldBasePasswordToggleStyleProps } from './useTextFieldBasePasswordToggleStyleProps';

const TextFieldBasePasswordToggle = (props: SpiritTextFieldBasePasswordToggleProps): JSX.Element => {
  const { children, isPasswordShown, onToggleClick, isDisabled, size } = props;
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
          <Icon name={`visibility-${isPasswordShown ? 'off' : 'on'}`} boxSize={size === Sizes.SMALL ? 16 : 20} />
        </span>
      </button>
    </div>
  );
};

TextFieldBasePasswordToggle.spiritComponent = 'TextFieldBasePasswordToggle';

export default TextFieldBasePasswordToggle;
