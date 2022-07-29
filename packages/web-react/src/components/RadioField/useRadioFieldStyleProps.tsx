import classNames from 'classnames';
import { useClassNamePrefix } from '../../hooks/useClassNamePrefix';
import { SpiritRadioFieldProps, RadioFieldProps } from '../../types';

export interface RadioFieldStyles {
  /** className props */
  classProps: {
    root: string;
    label: string;
    input: string;
  };
  /** props to be passed to the input element */
  props: RadioFieldProps;
}

export function useRadioFieldStyleProps(props: SpiritRadioFieldProps): RadioFieldStyles {
  const { isLabelHidden, ...restProps } = props;
  const { isDisabled } = restProps;

  const radioFieldClass = useClassNamePrefix('RadioField');
  const radioFieldDisabledClass = `${radioFieldClass}--disabled`;
  const radioFieldInputClass = `${radioFieldClass}__input`;
  const radioFieldLabelClass = `${radioFieldClass}__label`;
  const radioFieldLabelHiddenClass = `${radioFieldClass}__label--hidden`;

  const rootStyles = classNames(radioFieldClass, {
    [radioFieldDisabledClass]: isDisabled,
  });
  const labelStyles = classNames(radioFieldLabelClass, {
    [radioFieldLabelHiddenClass]: isLabelHidden,
  });

  return {
    classProps: {
      root: rootStyles,
      label: labelStyles,
      input: radioFieldInputClass,
    },
    props: restProps,
  };
}
