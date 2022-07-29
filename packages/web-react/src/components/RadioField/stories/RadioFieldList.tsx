import React, { ChangeEventHandler, useState } from 'react';
import RadioField from '../RadioField';
import { Stack } from '../../Stack';

// @see: https://github.com/storybookjs/storybook/issues/8104#issuecomment-932310244
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Story = (props: unknown) => {
  const [checkedOption, setCheckedOption] = useState('value1');

  const onValueChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setCheckedOption(event.target.value);
  };

  const radioList = ['value1', 'value2', 'value3'];

  return (
    <Stack>
      {radioList.map((value) => (
        <RadioField
          key={value}
          id={value}
          label={`Radio ${value}`}
          onChange={onValueChange}
          name="exampleList"
          value={value}
          isChecked={checkedOption === value}
        />
      ))}
    </Stack>
  );
};

export default Story;
