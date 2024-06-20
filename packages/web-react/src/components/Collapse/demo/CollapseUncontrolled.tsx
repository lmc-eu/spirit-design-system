// Because there is no `dist` directory during the CI run
/* eslint-disable import/no-extraneous-dependencies, import/extensions, import/no-unresolved */
import { StoryFn } from '@storybook/react';
import React from 'react';
import UncontrolledCollapse from '../UncontrolledCollapse';
import { CollapseTrigger, content } from './Collapse';

const Story: StoryFn<typeof UncontrolledCollapse> = () => {
  return (
    <div>
      {content}
      <UncontrolledCollapse id="uncontrolled-collapse-id" renderTrigger={CollapseTrigger}>
        {content}
      </UncontrolledCollapse>
    </div>
  );
};

export default Story;
