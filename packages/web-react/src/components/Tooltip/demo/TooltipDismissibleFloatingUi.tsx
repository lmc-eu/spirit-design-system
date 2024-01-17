// Because there is no `dist` directory during the CI run
/* eslint-disable import/no-extraneous-dependencies, import/extensions, import/no-unresolved */
import React, { useState } from 'react';
import {
  autoUpdate,
  flip,
  useDismiss,
  useFloating,
  useFocus,
  useHover,
  useInteractions,
  useRole,
} from '@floating-ui/react';
import { ComponentStory } from '@storybook/react';
import Tooltip from '../Tooltip';
import { Button } from '../../Button';

const Story: ComponentStory<typeof Tooltip> = () => {
  const [open, setOpen] = useState(true);

  const closeHandler = () => setOpen(false);

  const { x, y, refs, context, placement } = useFloating({
    placement: 'top',
    whileElementsMounted: autoUpdate,
    middleware: [flip()],
  });

  const hover = useHover(context, { move: false });
  const focus = useFocus(context);
  const dismiss = useDismiss(context);
  const role = useRole(context, { role: 'tooltip' });
  const { getReferenceProps, getFloatingProps } = useInteractions([hover, focus, dismiss, role]);

  return (
    <>
      <p>
        The following example is using external library <a href="https://floating-ui.com">Floating UI</a>.
      </p>
      <p>🖱 Try scrolling the example to see how Tooltip placement is updated.</p>
      <div className="docs-FloatingUI-Wrapper">
        <div className="docs-FloatingUI-Container">
          <Button ref={refs.setReference} {...getReferenceProps()}>
            I have a tooltip!
          </Button>
          <Tooltip
            placement="off"
            open={open}
            onClose={closeHandler}
            isDismissible
            ref={refs.setFloating}
            UNSAFE_style={{
              top: y ?? 0,
              left: x ?? 0,
            }}
            data-spirit-placement={placement}
            {...getFloatingProps()}
          >
            Hello there!
          </Tooltip>
        </div>
      </div>
    </>
  );
};

Story.args = {};

export default Story;
