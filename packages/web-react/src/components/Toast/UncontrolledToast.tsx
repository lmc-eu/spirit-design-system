import React from 'react';
import Toast from './Toast';
import ToastBar from './ToastBar';
import { useToast } from './useToast';
import { UncontrolledToastProps } from '../../types';

const defaultProps = {
  isDismissible: true,
};

const UncontrolledToast = (props: UncontrolledToastProps) => {
  const propsWithDefaults = { ...defaultProps, ...props };
  const { alignmentX, alignmentY, closeLabel, hasIcon, isDismissible, ...restProps } = propsWithDefaults;
  const { hide, color, iconName, message, id, isOpen } = useToast();

  return (
    <Toast alignmentX={alignmentX} alignmentY={alignmentY}>
      <ToastBar
        id={id}
        closeLabel={closeLabel}
        color={color}
        hasIcon={hasIcon}
        iconName={iconName}
        isDismissible={isDismissible}
        onClose={hide}
        isOpen={!!isOpen && !!message}
        {...restProps}
      >
        {message}
      </ToastBar>
    </Toast>
  );
};

export default UncontrolledToast;
