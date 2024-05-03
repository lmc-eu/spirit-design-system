import React from 'react';
import Toast from './Toast';
import ToastBar from './ToastBar';
import { useToast } from './useToast';
import { UncontrolledToastProps } from '../../types';

const UncontrolledToast = (props: UncontrolledToastProps) => {
  const { alignmentX, alignmentY, isCollapsible, closeLabel, ...restProps } = props;
  const { hide, queue } = useToast();

  return (
    <Toast alignmentX={alignmentX} alignmentY={alignmentY} isCollapsible={isCollapsible}>
      {queue.map((item) => {
        const { color, iconName, id, isOpen, message, hasIcon, isDismissible } = item;

        return (
          <ToastBar
            {...restProps}
            key={id}
            id={id}
            closeLabel={closeLabel}
            color={color}
            hasIcon={hasIcon}
            iconName={iconName}
            isDismissible={isDismissible}
            onClose={() => hide(id)}
            isOpen={isOpen && !!message}
          >
            {message}
          </ToastBar>
        );
      })}
    </Toast>
  );
};

export default UncontrolledToast;
