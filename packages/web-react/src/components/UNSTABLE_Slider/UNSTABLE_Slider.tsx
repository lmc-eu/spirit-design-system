import classNames from 'classnames';
import React, { CSSProperties, ChangeEvent, FormEvent, ForwardedRef, forwardRef } from 'react';
import { useStyleProps } from '../../hooks';
import { SpiritSliderProps } from '../../types';
import { HelperText, ValidationText, useAriaIds } from '../Field';
import { SLIDER_DEFAULT_PROPS } from './constants';
import { useSliderStyleProps } from './useSliderStyleProps';

const defaultProps = {
  ...SLIDER_DEFAULT_PROPS,
};

/* We need an exception for components exported with forwardRef */
/* eslint no-underscore-dangle: ['error', { allow: ['_UnstableSlider'] }] */
const _UnstableSlider = (props: SpiritSliderProps, ref: ForwardedRef<HTMLInputElement>) => {
  const propsWithDefaults = { ...defaultProps, ...props };
  const {
    'aria-describedby': ariaDescribedBy,
    helperText,
    id,
    isDisabled,
    label,
    max,
    min,
    step,
    validationState,
    validationText,
    value,
    ...restProps
  } = propsWithDefaults;

  const { classProps, props: modifiedProps } = useSliderStyleProps({ ...restProps, isDisabled, validationState });
  const { styleProps, props: otherProps } = useStyleProps(modifiedProps);
  const [ids, register] = useAriaIds(ariaDescribedBy);

  const CSSVariable = '--slider-position';

  const getSliderPosition = (num: number) => `${Math.round((100 * (num - min)) / (max - min))}%`;

  const handleInput = (event: FormEvent<HTMLInputElement>) => {
    const { target } = event as ChangeEvent<HTMLInputElement>;
    const { value: inputValue } = target;

    target.style.setProperty(CSSVariable, getSliderPosition(Number(inputValue)));
  };

  return (
    <div {...styleProps} {...otherProps} className={classNames(classProps.root, styleProps.className)}>
      <label htmlFor={id} className={classProps.label}>
        {label}
      </label>
      <input
        aria-describedby={ids.join(' ')}
        className={classProps.input}
        id={id}
        onInput={handleInput}
        ref={ref}
        style={{ [CSSVariable]: `${getSliderPosition(value)}` } as CSSProperties}
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        disabled={isDisabled}
      />
      <HelperText
        className={classProps.helperText}
        helperText={helperText}
        id={`${id}__helperText`}
        registerAria={register}
      />
      {validationState && (
        <ValidationText
          className={classProps.validationText}
          id={`${id}__validationText`}
          registerAria={register}
          validationText={validationText}
        />
      )}
    </div>
  );
};

export const UNSTABLE_Slider = forwardRef<HTMLInputElement, SpiritSliderProps>(_UnstableSlider);

export default UNSTABLE_Slider;
