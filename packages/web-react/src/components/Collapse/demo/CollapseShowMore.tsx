// Because there is no `dist` directory during the CI run
/* eslint-disable import/no-extraneous-dependencies, import/extensions, import/no-unresolved */
import { ComponentStory } from '@storybook/react';
import React from 'react';
import { Button } from '../../Button';
import { useCollapse, Collapse } from '../index';
import { content } from './Collapse';
import { ClickEvent } from '../../../types';

export const CollapseTriggers = ({ isOpen, onClick }: { isOpen: boolean; onClick: (event: ClickEvent) => void }) => {
  return (
    <div className="mb-400">
      <Button onClick={onClick} aria-expanded={isOpen} UNSAFE_className="mr-600">
        <span className="accessibility-open">Show less</span>
        <span className="accessibility-closed">Show more</span>
      </Button>
      <a href="#" role="button" onClick={onClick} aria-expanded={isOpen}>
        <span className="accessibility-open">Show less</span>
        <span className="accessibility-closed">Show more</span>
      </a>
    </div>
  );
};

const Story: ComponentStory<typeof Collapse> = () => {
  const { isOpen, toggleHandler } = useCollapse(false);

  return (
    <div>
      {content}
      <CollapseTriggers isOpen={isOpen} onClick={toggleHandler} />
      <Collapse isOpen={isOpen}>{content}</Collapse>
    </div>
  );
};

export default Story;
