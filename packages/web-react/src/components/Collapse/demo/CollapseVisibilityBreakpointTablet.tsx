import React from 'react';
import { ButtonLink } from '../../Button';
import Collapse from '../Collapse';
import { useCollapse } from '../useCollapse';

const CollapseVisibilityBreakpointTablet = () => {
  const { isOpen: isOpenTablet, toggleHandler: toggleHandlerTablet } = useCollapse(false);

  return (
    <>
      <ButtonLink isOpen={isOpenTablet} onClick={toggleHandlerTablet} size="medium" UNSAFE_className="d-tablet-none">
        Collapse trigger
      </ButtonLink>
      <Collapse id="collapse-visibility-breakpoint-tablet-id" isOpen={isOpenTablet} collapsibleToBreakpoint="tablet">
        Turpis cursus, urna vehicula sed porttitor nulla non mauris sapien congue, urna dui augue facilisis. Nunc elit,
        ipsum porttitor curabitur sapien nulla finibus quis pulvinar, commodo convallis lorem fringilla nec. Quam
        libero, vitae massa ornare eget vestibulum et iaculis quisque sapien, turpis maximus maximus vivamus. Nibh
        maximus molestie, donec rhoncus erat sed ac molestie donec sollicitudin sed id tortor, consequat venenatis
        fringilla augue. Urna imperdiet, dui vel risus posuere interdum duis id posuere purus, vel arcu dui erat id. Sed
        vitae potenti, ultricies pretium accumsan ligula lorem fringilla non nulla vel mi orci, sed id tortor lorem
        ipsum dolor sit amet dui et vehicula.
      </Collapse>
    </>
  );
};

export default CollapseVisibilityBreakpointTablet;
