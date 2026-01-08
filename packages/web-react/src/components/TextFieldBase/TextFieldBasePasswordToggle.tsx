'use client';

import React from 'react';
import { Sizes } from '../../constants';
import { type SpiritTextFieldBasePasswordToggleProps } from '../../types';
import { Icon } from '../Icon';
import {
  TEXT_FIELD_BASE_PASSWORD_TOGGLE_HIDE_LABEL_DEFAULT,
  TEXT_FIELD_BASE_PASSWORD_TOGGLE_SHOW_LABEL_DEFAULT,
} from './constants';
import { useTextFieldBasePasswordToggleStyleProps } from './useTextFieldBasePasswordToggleStyleProps';

const TextFieldBasePasswordToggle = (props: SpiritTextFieldBasePasswordToggleProps): JSX.Element => {
  const { children, isPasswordShown, onToggleClick, isDisabled, size } = props;
  const { classProps } = useTextFieldBasePasswordToggleStyleProps();
  const ariaLabel = isPasswordShown
    ? TEXT_FIELD_BASE_PASSWORD_TOGGLE_HIDE_LABEL_DEFAULT
    : TEXT_FIELD_BASE_PASSWORD_TOGGLE_SHOW_LABEL_DEFAULT;

  return (
    <div className={classProps.passwordToggle}>
      {children}
      <button
        className={classProps.passwordToggleButton}
        type="button"
        role="switch"
        aria-checked={!!isPasswordShown}
        aria-label={ariaLabel}
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
