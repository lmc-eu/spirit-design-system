import classNames from 'classnames';
import { useClassNamePrefix } from '../../hooks';
import { Validation } from '../../types';

export interface UseSelectStyleProps extends Validation {
  isDisabled?: boolean;
  isFluid?: boolean;
  isLabelHidden?: boolean;
}

export interface UseSelectStyleReturn {
  /** className props */
  classProps: {
    root: string;
    label: string;
    container: string;
    input: string;
    icon: string;
    validationText: string;
    helperText: string;
  };
}

export const useSelectStyleProps = ({
  isDisabled,
  isFluid,
  isLabelHidden,
  isRequired,
  validationState,
}: UseSelectStyleProps): UseSelectStyleReturn => {
  const selectRootClass = useClassNamePrefix('Select');
  const selectRootFluidClass = `${selectRootClass}--fluid`;
  const selectRootDisabledClass = `${selectRootClass}--disabled`;
  const selectRootValidationClass = `${selectRootClass}--${validationState}`;
  const selectLabelClass = `${selectRootClass}__label`;
  const selectLabelRequiredClass = `${selectLabelClass}--required`;
  const selectLabelHiddenClass = `${selectLabelClass}--hidden`;
  const selectContainerClass = `${selectRootClass}__inputContainer`;
  const selectInputClass = `${selectRootClass}__input`;
  const selectIconClass = `${selectRootClass}__icon`;
  const selectValidationTextClass = `${selectRootClass}__validationText`;
  const selectHelperTextClass = `${selectRootClass}__helperText`;

  return {
    classProps: {
      root: classNames(selectRootClass, {
        [selectRootDisabledClass]: isDisabled,
        [selectRootFluidClass]: isFluid,
        [selectRootValidationClass]: validationState,
      }),
      label: classNames(selectLabelClass, {
        [selectLabelRequiredClass]: isRequired,
        [selectLabelHiddenClass]: isLabelHidden,
      }),
      container: selectContainerClass,
      input: selectInputClass,
      icon: selectIconClass,
      validationText: selectValidationTextClass,
      helperText: selectHelperTextClass,
    },
  };
};
