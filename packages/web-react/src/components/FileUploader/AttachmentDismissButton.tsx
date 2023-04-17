import React from 'react';
import classNames from 'classnames';
import { SpiritAttachmentDismissButtonProps } from '../../types';
import { Icon } from '../Icon';
import { useFileUploaderStyleProps } from './useFileUploaderStyleProps';
import { useStyleProps } from '../../hooks';

const AttachmentDismissButton = (props: SpiritAttachmentDismissButtonProps) => {
  const { children, ...restProps } = props;

  const { classProps } = useFileUploaderStyleProps();
  const { styleProps, props: transferProps } = useStyleProps(restProps);

  return (
    <button
      type="button"
      {...transferProps}
      {...styleProps}
      className={classNames(classProps.attachment.button, styleProps.className)}
    >
      <span className="accessibility-hidden">{children}</span>
      <Icon name="close" aria-hidden="true" />
    </button>
  );
};

export default AttachmentDismissButton;
