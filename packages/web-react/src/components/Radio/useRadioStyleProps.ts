import classNames from 'classnames';
import { useClassNamePrefix } from '../../hooks';
import { SpiritRadioProps, RadioProps } from '../../types';

export interface RadioStyles {
  /** className props */
  classProps: {
    root: string;
    label: string;
    input: string;
    text: string;
    helperText: string;
  };
  /** props to be passed to the input element */
  props: RadioProps;
}

export function useRadioStyleProps(props: SpiritRadioProps): RadioStyles {
  const { isItem, validationState, isLabelHidden, ...restProps } = props;
  const { isDisabled } = restProps;

  const radioClass = useClassNamePrefix('Radio');
  const radioDisabledClass = `${radioClass}--disabled`;
  const radioItemClass = `${radioClass}--item`;
  const radioInputClass = `${radioClass}__input`;
  const radioLabelClass = `${radioClass}__label`;
  const radioLabelHiddenClass = `${radioClass}__label--hidden`;
  const radioTextClass = `${radioClass}__text`;
  const radioHelperTextClass = `${radioClass}__helperText`;
  const radioValidationClass = `${radioClass}--${validationState}`;

  const rootStyles = classNames(radioClass, {
    [radioDisabledClass]: isDisabled,
    [radioItemClass]: isItem,
    [radioValidationClass]: validationState,
  });
  const labelStyles = classNames(radioLabelClass, {
    [radioLabelHiddenClass]: isLabelHidden,
  });

  return {
    classProps: {
      root: rootStyles,
      label: labelStyles,
      input: radioInputClass,
      text: radioTextClass,
      helperText: radioHelperTextClass,
    },
    props: restProps,
  };
}
