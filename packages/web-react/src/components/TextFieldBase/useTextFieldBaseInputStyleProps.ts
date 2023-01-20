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
  const { isMultiline, ...restProps } = props;

  const TextFieldBaseClass = useClassNamePrefix(isMultiline ? 'TextArea' : 'TextField');
  const TextFieldBaseInputClass = `${TextFieldBaseClass}__input`;

  return {
    classProps: {
      input: TextFieldBaseInputClass,
    },
    props: {
      ...restProps,
      isMultiline,
    },
  };
}
