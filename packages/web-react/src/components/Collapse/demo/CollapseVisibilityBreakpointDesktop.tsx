import React from 'react';
import { ButtonLink } from '../../Button';
import Collapse from '../Collapse';
import { useCollapse } from '../useCollapse';

const CollapseVisibilityBreakpointDesktop = () => {
  const { isOpen: isOpenDesktop, toggleHandler: toggleHandlerDesktop } = useCollapse(false);

  return (
    <>
      <ButtonLink onClick={toggleHandlerDesktop} size="medium" UNSAFE_className="d-desktop-none">
        Collapse trigger
      </ButtonLink>
      <Collapse id="collapse-visibility-breakpoint-desktop-id" isOpen={isOpenDesktop} collapsibleToBreakpoint="desktop">
        Elementum luctus ultrices, ultrices quam metus a lorem sollicitudin lorem fringilla curabitur felis a, sed urna
        consectetur maximus. Imperdiet donec, elit condimentum dolor ut accumsan congue nulla ut id ante vel arcu, lorem
        fringilla interdum pulvinar nullam. Curabitur interdum, semper donec dui et tempus fusce vitae ornare risus
        lorem, varius tristique sem odio elit. Felis a ut venenatis, aliquam semper sapien consequat elementum vivamus
        tortor, cursus donec volutpat vitae massa. Sapien nam, dolor ut quam venenatis interdum molestie augue dui,
        lorem sodales facilisis semper. Consectetur vivamus, commodo nulla accumsan fringilla mauris sagittis ipsum,
        neque dolor quis ligula nunc.
      </Collapse>
    </>
  );
};

export default CollapseVisibilityBreakpointDesktop;
