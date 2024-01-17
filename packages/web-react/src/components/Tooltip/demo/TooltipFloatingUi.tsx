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
import { Button } from '../../Button';
import Tooltip from '../Tooltip';

const TooltipFloatingUI = () => {
  const [open, setOpen] = useState(true);

  const { x, y, refs, context, placement } = useFloating({
    open,
    onOpenChange: setOpen,
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
      <div
        className="docs-FloatingUI-Wrapper bg-cover"
        style={{ width: '40rem', maxWidth: '100%', height: '12rem', overflow: 'auto' }}
      >
        <div
          className="docs-FloatingUI-Container"
          style={{ position: 'relative', width: '100%', height: '20rem', paddingBlock: '7rem', textAlign: 'center' }}
        >
          <Button ref={refs.setReference} {...getReferenceProps()}>
            I have a tooltip!
          </Button>
          <Tooltip
            placement="off"
            open={open}
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

export default TooltipFloatingUI;
