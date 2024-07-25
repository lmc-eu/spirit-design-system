'use client';

import classNames from 'classnames';
import React, { MouseEvent, RefObject, useRef, useState } from 'react';
import { useClassNamePrefix, useStyleProps } from '../../hooks';
import { SpiritFileUploaderAttachmentProps } from '../../types';
import { Icon } from '../Icon';
import AttachmentActionButton from './AttachmentActionButton';
import AttachmentDismissButton from './AttachmentDismissButton';
import AttachmentImagePreview from './AttachmentImagePreview';
import {
  DEFAULT_BUTTON_LABEL,
  DEFAULT_EDIT_BUTTON_LABEL,
  DEFAULT_ICON_NAME,
  IMAGE_PREVIEW_BASE64_MAX_WIDTH,
} from './constants';
import { useFileUploaderAttachment } from './useFileUploaderAttachment';
import { useFileUploaderStyleProps } from './useFileUploaderStyleProps';
import { image2Base64Preview } from './utils';

const FileUploaderAttachment = (props: SpiritFileUploaderAttachmentProps) => {
  const {
    editText,
    file,
    hasImagePreview,
    iconName = DEFAULT_ICON_NAME,
    id,
    imageObjectFit,
    label,
    meta,
    name,
    onDismiss,
    onEdit,
    onError,
    removeText,
    ...restProps
  } = props;
  const [imagePreview, setImagePreview] = useState<string>('');

  const { classProps } = useFileUploaderStyleProps();
  const { styleProps, props: transferProps } = useStyleProps(restProps);

  const isFileImage = file.type.includes('image');

  const attachmentRef = useRef() as RefObject<HTMLLIElement>;

  const dismissHandler = () => {
    if (onDismiss) {
      onDismiss(id);
    }
  };

  const onEditHandler = (event: MouseEvent) => onEdit && onEdit(event, file);

  if (isFileImage) {
    image2Base64Preview(file, IMAGE_PREVIEW_BASE64_MAX_WIDTH, (compressedDataURL) =>
      setImagePreview(compressedDataURL),
    );
  }

  useFileUploaderAttachment({ attachmentRef, file, name, meta, onError });

  return (
    <li
      id={id}
      ref={attachmentRef}
      {...transferProps}
      {...styleProps}
      className={classNames(classProps.attachment.root, styleProps.className)}
    >
      {hasImagePreview && imagePreview ? (
        <AttachmentImagePreview label={label} imagePreview={imagePreview} meta={meta} imageObjectFit={imageObjectFit} />
      ) : (
        <Icon name={iconName} aria-hidden="true" />
      )}
      <span className={classProps.attachment.name}>
        <span className={useClassNamePrefix('text-truncate')}>{label}</span>
      </span>
      {onEdit && (
        <span className={classProps.attachment.slot}>
          <AttachmentActionButton onClick={onEditHandler}>
            {editText || DEFAULT_EDIT_BUTTON_LABEL}
          </AttachmentActionButton>
        </span>
      )}
      <AttachmentDismissButton onClick={dismissHandler}>{removeText || DEFAULT_BUTTON_LABEL}</AttachmentDismissButton>
    </li>
  );
};

export default FileUploaderAttachment;
