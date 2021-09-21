import Button from './Button';

export default {
  title: 'Components/Button',
  argTypes: {
    label: { control: 'text' },
    onClick: { action: 'onClick' },
  },
};

const Template = ({ label, ...args }) => {
  return `<div>${label}</div>`;
};

export const Primary = Template.bind({});
Primary.args = {
  label: 'Button',
};

