import classNames from 'classnames';
import { Validation } from '../../types';
import { useClassNamePrefix } from '../../hooks';

export interface UseFieldGroupStyleProps extends Validation {
  isFluid?: boolean;
}

export interface UseFieldGroupStyleReturn {
  /** className props */
  classProps: {
    root: string;
    label: string;
    fields: string;
    validationText: string;
    helperText: string;
  };
}

export const useFieldGroupStyleProps = ({
  isFluid,
  isRequired,
  validationState,
}: UseFieldGroupStyleProps): UseFieldGroupStyleReturn => {
  const fieldGroupRootClass = useClassNamePrefix('FieldGroup');
  const fieldGroupRootFluidClass = `${fieldGroupRootClass}--fluid`;
  const fieldGroupRootValidationClass = `${fieldGroupRootClass}--${validationState}`;
  const fieldGroupLabelClass = `${fieldGroupRootClass}__label`;
  const fieldGroupLabelRequiredClass = `${fieldGroupLabelClass}--required`;
  const fieldGroupFieldsClass = `${fieldGroupRootClass}__fields`;
  const fieldGroupValidationTextClass = `${fieldGroupRootClass}__validationText`;
  const fieldGroupHelperTextClass = `${fieldGroupRootClass}__helperText`;

  return {
    classProps: {
      root: classNames(fieldGroupRootClass, {
        [fieldGroupRootFluidClass]: isFluid,
        [fieldGroupRootValidationClass]: validationState,
      }),
      label: classNames(fieldGroupLabelClass, {
        [fieldGroupLabelRequiredClass]: isRequired,
      }),
      fields: fieldGroupFieldsClass,
      validationText: fieldGroupValidationTextClass,
      helperText: fieldGroupHelperTextClass,
    },
  };
};
