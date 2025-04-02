import classNames from 'classnames';
import { useClassNamePrefix } from '../../hooks';
import { SpiritTextFieldBaseInputProps, TextFieldBaseProps } from '../../types';

export interface TextFieldBaseInputStyles {
  /** className props */
  classProps: {
    input: string;
  };
  /** props to be passed to the input element */
  props: TextFieldBaseProps;
}

export function useTextFieldBaseInputStyleProps(props: SpiritTextFieldBaseInputProps): TextFieldBaseInputStyles {
  const { inputWidth, isMultiline, id, ...restProps } = props;

  const TextFieldBaseClass = useClassNamePrefix(isMultiline ? 'TextArea' : 'TextField');
  const TextFieldBaseInputClass = `${TextFieldBaseClass}__input`;
  const TextFieldBaseInputCustomWidthClass = `${TextFieldBaseClass}__input--customWidth`;

  return {
    classProps: {
      input: classNames(TextFieldBaseInputClass, {
        [TextFieldBaseInputCustomWidthClass]: inputWidth,
      }),
    },
    props: {
      ...restProps,
      inputWidth,
      isMultiline,
      id,
    },
  };
}
