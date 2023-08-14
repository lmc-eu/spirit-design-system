import React from 'react';
import { ComponentStory } from '@storybook/react';
import { SpiritFieldGroupProps } from '../../../types';
import FieldGroup from '../FieldGroup';

const Story: ComponentStory<typeof FieldGroup> = (args: SpiritFieldGroupProps) => <FieldGroup {...args} />;

Story.args = {
  children: (
    <>
      <div className="docs-Box">Item</div>
      <div className="docs-Box">Item</div>
      <div className="docs-Box">Item</div>
    </>
  ),
};

export default Story;
