// Because there is no `dist` directory during the CI run
/* eslint-disable import/no-extraneous-dependencies, import/extensions, import/no-unresolved */
import React from 'react';
import { ComponentStory } from '@storybook/react';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore: No declaration file
import { SpiritTextFieldProps } from '../../../types';
import TextField from '../TextField';

const Story: ComponentStory<typeof TextField> = (args: SpiritTextFieldProps) => <TextField {...args} />;

Story.args = {
  id: 'textfield-helper-text-example',
  label: 'Label with helper text',
  helperText: 'Custom helper text',
};

export default Story;
