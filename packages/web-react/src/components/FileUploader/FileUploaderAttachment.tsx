import React, { useRef, RefObject } from 'react';
import classNames from 'classnames';
import { SpiritFileUploaderAttachmentProps } from '../../types';
import { useStyleProps } from '../../hooks';
import { useFileUploaderStyleProps } from './useFileUploaderStyleProps';
import { useFileUploaderAttachment } from './useFileUploaderAttachment';
import AttachmentDismissButton from './AttachmentDismissButton';
import { Icon } from '../Icon';

const FileUploaderAttachment = (props: SpiritFileUploaderAttachmentProps) => {
  const { label, name, iconName = 'file', id, onDismiss, buttonLabel = 'Remove', file, onError, ...restProps } = props;

  const { classProps } = useFileUploaderStyleProps();
  const { styleProps, props: transferProps } = useStyleProps(restProps);

  const attachmentRef = useRef() as RefObject<HTMLLIElement>;

  const dismissHandler = () => {
    if (onDismiss) {
      onDismiss(id);
    }
  };

  useFileUploaderAttachment({ attachmentRef, file, name, onError });

  return (
    <li
      id={id}
      ref={attachmentRef}
      {...transferProps}
      {...styleProps}
      className={classNames(classProps.attachment.root, styleProps.className)}
    >
      <Icon name={iconName} aria-hidden="true" />
      <span className="text-truncate">{label}</span>
      <AttachmentDismissButton onClick={dismissHandler}>{buttonLabel}</AttachmentDismissButton>
    </li>
  );
};

export default FileUploaderAttachment;
