import React from 'react';
import { Button, ButtonLink } from '../../Button';
import Collapse from '../Collapse';
import { useCollapse } from '../useCollapse';

const CollapseMultipleTriggers = () => {
  const { isOpen, toggleHandler } = useCollapse(false);

  return (
    <>
      <Button onClick={toggleHandler}>Collapse trigger</Button>
      <Collapse id="collapse-multiple-triggers-id" isOpen={isOpen}>
        Aliquam varius, consequat posuere a lacinia mauris eu tellus condimentum ut id ante, accumsan vehicula nulla
        neque. Mauris mi orci, in donec nullam odio leo sapien et vehicula nunc a lacinia, fermentum arcu ullamcorper
        posuere. Mauris euismod, ac nec ante fermentum praesent nisi commodo neque placerat, vivamus dui et tempus
        pulvinar suspendisse. Porttitor eget, sollicitudin hendrerit bibendum nulla aliquam sit amet leo vitae, eget
        consectetur diam a vestibulum. Adipiscing lorem ipsum, arcu condimentum posuere semper morbi condimentum dui,
        bibendum nunc aenean facilisis. Phasellus euismod, donec sem odio ligula praesent finibus nibh convallis,
        tristique aliquam sed id tortor sem lobortis.
      </Collapse>
      <Button onClick={toggleHandler} color="secondary">
        Secondary trigger
      </Button>{' '}
      <ButtonLink href="#" onClick={toggleHandler} aria-expanded={isOpen} color="tertiary">
        Tertiary trigger
      </ButtonLink>
    </>
  );
};

export default CollapseMultipleTriggers;
