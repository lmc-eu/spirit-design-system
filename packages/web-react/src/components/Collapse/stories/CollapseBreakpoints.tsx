// Because there is no `dist` directory during the CI run
/* eslint-disable import/no-extraneous-dependencies, import/extensions, import/no-unresolved */
import { ComponentStory } from '@storybook/react';
import React from 'react';
import Collapse from '../Collapse';
import { useCollapse } from '../useCollapse';
import { content, CollapseTrigger } from './Collapse';

const Story: ComponentStory<typeof Collapse> = () => {
  const { collapsed, toggleHandler } = useCollapse(false);

  return (
    <div>
      {content}
      <CollapseTrigger collapsed={collapsed} onClick={toggleHandler} UNSAFE_className="d-tablet-none" />
      <Collapse isCollapsed={collapsed} collapsibleToBreakpoint="tablet">
        {content}
      </Collapse>
    </div>
  );
};

export default Story;
