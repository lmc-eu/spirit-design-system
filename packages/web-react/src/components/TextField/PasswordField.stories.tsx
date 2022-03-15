import TextFieldStory, { Default as DefaultTextField, Template } from './TextField.stories';

export default {
  title: 'Components/PasswordField',
  argTypes: TextFieldStory.argTypes,
};

export const Default = Template.bind({});
Default.args = {
  ...DefaultTextField.args,
  type: 'password',
};

export const Required = Template.bind({});
Required.args = {
  ...Default.args,
  required: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
  ...Default.args,
  disabled: true,
};

export const HiddenLabel = Template.bind({});
HiddenLabel.args = {
  ...Default.args,
  isLabelHidden: true,
};

export const WithSuccessState = Template.bind({});
WithSuccessState.args = {
  ...Default.args,
  validationState: 'success',
};

export const WithWarningState = Template.bind({});
WithWarningState.args = {
  ...Default.args,
  validationState: 'warning',
};

export const WithErrorState = Template.bind({});
WithErrorState.args = {
  ...Default.args,
  validationState: 'error',
};
