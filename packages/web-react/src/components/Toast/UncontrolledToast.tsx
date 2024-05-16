import React from 'react';
import { UncontrolledToastProps } from '../../types';
import Toast from './Toast';
import ToastBar from './ToastBar';
import { useToast } from './useToast';
import { ToastBarLink, ToastBarMessage } from '.';

const UncontrolledToast = (props: UncontrolledToastProps) => {
  const { alignmentX, alignmentY, isCollapsible, closeLabel, ...restProps } = props;
  const { hide, queue } = useToast();

  return (
    <Toast alignmentX={alignmentX} alignmentY={alignmentY} isCollapsible={isCollapsible}>
      {queue.map((item) => {
        const { color, iconName, id, isOpen, content, hasIcon, isDismissible, linkProps } = item;

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
            isOpen={isOpen && !!content}
          >
            <ToastBarMessage>{content.message}</ToastBarMessage>
            {content.link && <ToastBarLink {...linkProps}>{content.link}</ToastBarLink>}
          </ToastBar>
        );
      })}
    </Toast>
  );
};

export default UncontrolledToast;
