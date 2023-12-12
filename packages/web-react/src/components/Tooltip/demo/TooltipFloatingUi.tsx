import React, { useEffect, useRef, useState } from 'react';
import {
  arrow,
  autoUpdate,
  flip,
  limitShift,
  offset,
  shift,
  // size,
  useFloating,
  useFocus,
  useInteractions,
  useRole,
} from '@floating-ui/react';
import { Alert } from '../../Alert';
import { Button } from '../../Button';
import Tooltip from '../Tooltip';

const TooltipFloatingUI = () => {
  const arrowRef = useRef<HTMLSpanElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(true);

  // let tooltipMaxWidth = 'unset';
  const arrowCornerOffset = useRef(0);

  useEffect(() => {
    if (wrapperRef.current) {
      const wrapper = wrapperRef.current;
      wrapper.scrollLeft = (wrapper.scrollWidth - wrapper.clientWidth) / 2;
    }

    if (arrowRef.current) {
      arrowCornerOffset.current = parseInt(
        window.getComputedStyle(arrowRef.current).getPropertyValue('--tooltip-arrow-corner-offset'),
        10,
      );
    }
  }, []);

  const middleware = [
    offset(10),
    flip({ crossAxis: false }),
    shift({
      limiter: limitShift({
        offset: ({ rects }) => ({
          mainAxis: rects.reference.height,
        }),
      }),
    }),
    arrow({ element: arrowRef.current, padding: arrowCornerOffset.current }),
  ];

  const { refs, placement, context, floatingStyles, middlewareData } = useFloating({
    open,
    onOpenChange: setOpen,
    placement: 'top-start',
    middleware,
    whileElementsMounted: autoUpdate,
  });

  if (arrowRef.current) {
    const side = placement.split('-')[0];
    const arrowX = () => middlewareData.value.arrow?.x ?? null;
    const arrowY = () => middlewareData.value.arrow?.y ?? null;

    const staticSide = {
      top: 'bottom',
      right: 'left',
      bottom: 'top',
      left: 'right',
    }[side];

    const arrowOffset =
      staticSide === 'top' || staticSide === 'bottom'
        ? arrowRef.current.offsetHeight
        : (arrowRef.current.offsetHeight + arrowRef.current.offsetWidth) / 2;

    arrowRef.current.style.left = arrowX ? `${arrowX}px` : '';
    arrowRef.current.style.top = arrowY ? `${arrowY}px` : '';
    arrowRef.current.style.bottom = '';
    arrowRef.current.style.right = '';
    arrowRef.current.style[staticSide as 'top' | 'right' | 'bottom' | 'left'] = `-${arrowOffset}px`;
  }

  const focus = useFocus(context);
  const role = useRole(context, { role: 'tooltip' });
  const { getReferenceProps, getFloatingProps } = useInteractions([focus, role]);

  return (
    <>
      <p className="mb-0">
        The following example is using external library <a href="https://floating-ui.com">Floating UI</a>. Try scrolling
        the frame or resizing the window to see how the Tooltip behaves. The Floating UI library is trying to keep the
        Tooltip in the viewport and it is also flipping, shifting and resizing the Tooltip when it is not possible to
        keep it in the viewport.
      </p>

      <Alert color="informative">
        Please note that the Floating UI library is trying to point the arrow to the center of the trigger element. This
        is not possible to achieve in CSS only so our behavior is slightly different for tooltips not using Floating UI.
      </Alert>

      <div
        ref={wrapperRef}
        className="docs-FloatingUI-Wrapper bg-cover"
        style={{ width: '100%', maxWidth: '100%', height: '30rem', overflow: 'auto' }}
      >
        <div
          className="docs-FloatingUI-Container"
          style={{
            position: 'relative',
            width: '300%',
            height: '60rem',
            paddingBlock: '12rem',
            textAlign: 'center',
          }}
        >
          <Button ref={refs.setReference} {...getReferenceProps()}>
            I have a Floating tooltip!
          </Button>
          <Tooltip
            arrowRef={arrowRef}
            open={open}
            ref={refs.setFloating}
            UNSAFE_style={floatingStyles}
            placement={placement}
            data-spirit-placement-controlled
            {...getFloatingProps()}
          >
            This long tooltip is flipping, resizing and shifting to stay in the viewport. Also its arrow is always
            trying to point to the center of the trigger.
          </Tooltip>
        </div>
      </div>
    </>
  );
};

export default TooltipFloatingUI;
