// Because there is no `dist` directory during the CI run
/* eslint-disable import/no-extraneous-dependencies, import/extensions, import/no-unresolved */
import { ComponentStory } from '@storybook/react';
import React from 'react';
import UncontrolledCollapse from '../UncontrolledCollapse';
import { content, CollapseTrigger } from './Collapse';

const Story: ComponentStory<typeof UncontrolledCollapse> = () => {
  return (
    <div>
      {content}
      <UncontrolledCollapse id="uncontrolledCollapseId" renderTrigger={CollapseTrigger}>
        {content}
      </UncontrolledCollapse>
    </div>
  );
};

export default Story;
