import { ComponentMeta } from '@storybook/react';
import argTypes from './stories/argTypes';
import TextArea from './TextArea';

export default {
  title: 'Components/TextArea',
  component: TextArea,
  parameters: {
    docs: {
      description: {
        component: 'Enables the user to type in long text.',
      },
    },
  },
  argTypes,
} as ComponentMeta<typeof TextArea>;

export { default as TextArea } from './stories/TextArea';
export { default as TextAreaDisabled } from './stories/TextAreaDisabled';
export { default as TextAreaFluid } from './stories/TextAreaFluid';
export { default as TextAreaInputHeight } from './stories/TextAreaInputHeight';
export { default as TextAreaLabelHidden } from './stories/TextAreaLabelHidden';
export { default as TextAreaLabelRequired } from './stories/TextAreaRequired';
export { default as TextAreaValidationState } from './stories/TextAreaValidationState';
export { default as TextAreaWithAutoResize } from './stories/TextAreaWithAutoResize';
export { default as TextAreaHelperText } from './stories/TextAreaHelperText';
export { default as HTML } from './stories/TextAreaHtml';
