// Because there is no `dist` directory during the CI run
/* eslint-disable import/no-extraneous-dependencies, import/extensions, import/no-unresolved */
import { ComponentStory } from '@storybook/react';
import React from 'react';
import { useCollapse, Collapse } from '../index';
import { content, CollapseTrigger } from './Collapse';

const Story: ComponentStory<typeof Collapse> = () => {
  const { isOpen, toggleHandler } = useCollapse(false);

  return (
    <div>
      {content}
      {!isOpen && <CollapseTrigger isOpen={isOpen} onClick={toggleHandler} />}
      <Collapse isOpen={isOpen}>{content}</Collapse>
    </div>
  );
};

export default Story;
