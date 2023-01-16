import { ComponentMeta } from '@storybook/react';
import TextField from './TextField';

export default {
  title: 'Components/TextField',
  component: TextField,
  parameters: {
    docs: {
      description: {
        component: 'Enables the user to type in text information.',
      },
    },
  },
} as ComponentMeta<typeof TextField>;

export { default as TextField } from './stories/TextField';
export { default as TextFieldDisabled } from './stories/TextFieldDisabled';
export { default as TextFieldFluid } from './stories/TextFieldFluid';
export { default as TextFieldInputWidth } from './stories/TextFieldInputWidth';
export { default as TextFieldLabelHidden } from './stories/TextFieldLabelHidden';
export { default as TextFieldPasswordToggle } from './stories/TextFieldPasswordToggle';
export { default as TextFieldLabelRequired } from './stories/TextFieldRequired';
export { default as TextFieldType } from './stories/TextFieldType';
export { default as TextFieldValidationState } from './stories/TextFieldValidationState';
export { default as HTML } from './stories/TextFieldHtml';
