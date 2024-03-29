import React, { forwardRef, ForwardedRef } from 'react';
import classNames from 'classnames';
import { SpiritSelectProps } from '../../types';
import { useDeprecationMessage, useStyleProps } from '../../hooks';
import { HelperText, ValidationText, useAriaIds } from '../Field';
import { Icon } from '../Icon';
import { useSelectStyleProps } from './useSelectStyleProps';

/* We need an exception for components exported with forwardRef */
/* eslint no-underscore-dangle: ['error', { allow: ['_Select'] }] */
const _Select = (props: SpiritSelectProps, ref: ForwardedRef<HTMLSelectElement>) => {
  const {
    'aria-describedby': ariaDescribedBy = '',
    children,
    helperText,
    id,
    isDisabled,
    isFluid,
    isLabelHidden,
    isRequired,
    label,
    validationState,
    validationText,
    ...restProps
  } = props;

  const { classProps } = useSelectStyleProps({ isDisabled, isFluid, isRequired, isLabelHidden, validationState });
  const { styleProps, props: transferProps } = useStyleProps(restProps);

  const [ids, register] = useAriaIds(ariaDescribedBy);

  useDeprecationMessage({
    method: 'custom',
    trigger: !id,
    componentName: 'Select',
    customText: 'The "id" property will be required instead of optional starting from the next major version.',
  });

  return (
    <div {...styleProps} className={classNames(classProps.root, styleProps.className)}>
      <label htmlFor={id} className={classProps.label}>
        {label}
      </label>
      <div className={classProps.container}>
        <select
          {...transferProps}
          aria-describedby={ids.join(' ')}
          id={id}
          className={classProps.input}
          ref={ref}
          disabled={isDisabled}
          required={isRequired}
        >
          {children}
        </select>
        <div className={classProps.icon}>
          <Icon name="chevron-down" />
        </div>
      </div>
      <HelperText
        className={classProps.helperText}
        id={`${id}__helperText`}
        registerAria={register}
        helperText={helperText}
      />
      {validationState && (
        <ValidationText
          className={classProps.validationText}
          id={`${id}__validationText`}
          validationText={validationText}
          registerAria={register}
        />
      )}
    </div>
  );
};

export const Select = forwardRef<HTMLSelectElement, SpiritSelectProps>(_Select);

export default Select;
