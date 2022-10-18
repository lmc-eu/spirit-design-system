// Because there is no `dist` directory during the CI run
/* eslint-disable import/no-extraneous-dependencies, import/extensions, import/no-unresolved */
import React from 'react';
import { ComponentStory } from '@storybook/react';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore: No declaration file
import { SpiritTextAreaProps } from '../../../types';
import TextArea from '../TextArea';

const Story: ComponentStory<typeof TextArea> = (args: SpiritTextAreaProps) => <TextArea {...args} />;

Story.args = {
  id: 'textarea-example',
  label: 'Label',
};

export default Story;
