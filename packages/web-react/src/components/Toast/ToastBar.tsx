'use client';

import classNames from 'classnames';
import React, { MutableRefObject, useRef } from 'react';
import { Transition, TransitionStatus } from 'react-transition-group';
import { useStyleProps } from '../../hooks';
import { SpiritToastBarProps } from '../../types';
import { Icon } from '../Icon';
import {
  DEFAULT_TOAST_COLOR,
  ICON_BOX_SIZE,
  TOAST_BAR_CLOSE_BUTTON_LABEL_DEFAULT,
  TRANSITIONING_STYLES,
  TRANSITION_DURATION,
} from './constants';
import ToastCloseButton from './ToastCloseButton';
import { useToastBarStyleProps } from './useToastBarStyleProps';
import { useToastIcon } from './useToastIcon';

const ToastBar = (props: SpiritToastBarProps) => {
  const {
    id,
    children,
    closeLabel = TOAST_BAR_CLOSE_BUTTON_LABEL_DEFAULT,
    color = DEFAULT_TOAST_COLOR,
    hasIcon,
    iconName,
    isDismissible,
    isOpen = true,
    onClose = () => {},
    ...restProps
  } = props;
  const rootElementRef: MutableRefObject<HTMLDivElement | null> = useRef(null);
  const toastIconName = useToastIcon({ color, iconName });
  const { classProps, props: modifiedProps } = useToastBarStyleProps({
    ...restProps,
    color,
    isDismissible,
  });
  const { styleProps, props: otherProps } = useStyleProps(modifiedProps);

  return (
    <Transition in={isOpen} nodeRef={rootElementRef} timeout={TRANSITION_DURATION} unmountOnExit>
      {(transitionState: TransitionStatus) => (
        <div
          {...styleProps}
          {...otherProps}
          id={id}
          className={classNames(classProps.root, TRANSITIONING_STYLES[transitionState], styleProps.className)}
          ref={rootElementRef}
        >
          <div className={classProps.box}>
            <div className={classProps.container}>
              {(hasIcon || iconName) && <Icon name={toastIconName} boxSize={ICON_BOX_SIZE} />}
              <div className={classProps.content}>{children}</div>
            </div>
            <ToastCloseButton
              id={id}
              isOpen={isOpen}
              closeLabel={closeLabel}
              onClose={onClose}
              isDismissible={isDismissible}
            />
          </div>
        </div>
      )}
    </Transition>
  );
};

export default ToastBar;
