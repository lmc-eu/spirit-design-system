import React, { ElementType } from 'react';
import { ComponentStory } from '@storybook/react';
import Stack from '../Stack';
import { SpiritStackProps } from '../../../types';

const Story: ComponentStory<typeof Stack> = <E extends ElementType = 'div'>(args: SpiritStackProps<E>) => (
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore Missing IntrinsicAttributes
  <Stack {...args} />
);

Story.args = {
  children: (
    <>
      <li>
        <div>List item 1</div>
      </li>
      <li>
        <div>List item 1</div>
      </li>
      <li>
        <div>List item 1</div>
      </li>
    </>
  ),
  elementType: 'ul',
};

export default Story;
