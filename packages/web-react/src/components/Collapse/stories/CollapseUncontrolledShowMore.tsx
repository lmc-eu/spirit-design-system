// Because there is no `dist` directory during the CI run
/* eslint-disable import/no-extraneous-dependencies, import/extensions, import/no-unresolved */
import { ComponentStory } from '@storybook/react';
import React from 'react';
import UncontrolledCollapse from '../UncontrolledCollapse';
import { content } from './Collapse';
import { CollapseTriggers } from './CollapseShowMore';

const Story: ComponentStory<typeof UncontrolledCollapse> = () => {
  return (
    <div>
      {content}
      <UncontrolledCollapse renderTrigger={CollapseTriggers}>{content}</UncontrolledCollapse>
    </div>
  );
};

export default Story;
