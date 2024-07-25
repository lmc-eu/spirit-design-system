'use client';

import classNames from 'classnames';
import React from 'react';
import { useStyleProps } from '../../hooks';
import { SpiritFieldGroupProps } from '../../types';
import { HelperText, ValidationText, useAriaIds } from '../Field';
import { VisuallyHidden } from '../VisuallyHidden';
import { useFieldGroupStyleProps } from './useFieldGroupStyleProps';

const FieldGroup = (props: SpiritFieldGroupProps) => {
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
    ...rest
  } = props;

  const { classProps } = useFieldGroupStyleProps({ isFluid, isRequired, validationState });
  const { styleProps, props: transferProps } = useStyleProps(rest);

  const [ids, register] = useAriaIds(ariaDescribedBy);

  return (
    <fieldset
      {...transferProps}
      {...styleProps}
      aria-describedby={ids.join(' ')}
      className={classNames(classProps.root, styleProps.className)}
      disabled={isDisabled}
    >
      <VisuallyHidden elementType="legend">{label}</VisuallyHidden>
      {!isLabelHidden && (
        <div className={classProps.label} aria-hidden="true">
          {label}
        </div>
      )}
      <div className={classProps.fields}>{children}</div>
      <HelperText
        className={classProps.helperText}
        id={`${id}__helperText`}
        registerAria={register}
        helperText={helperText}
      />
      {validationState && (
        <ValidationText
          className={classProps.validationText}
          id={`${id}__helperText`}
          validationText={validationText}
          registerAria={register}
        />
      )}
    </fieldset>
  );
};

export default FieldGroup;
