import React, { useRef, RefObject, MouseEvent, useState } from 'react';
import classNames from 'classnames';
import { SpiritFileUploaderAttachmentProps } from '../../types';
import { useStyleProps } from '../../hooks';
import { useFileUploaderStyleProps } from './useFileUploaderStyleProps';
import { useFileUploaderAttachment } from './useFileUploaderAttachment';
import AttachmentImagePreview from './AttachmentImagePreview';
import { Icon } from '../Icon';
import { DEFAULT_ICON_NAME, DEFAULT_BUTTON_LABEL, DEFAULT_EDIT_BUTTON_LABEL } from './constants';
import { image2Base64Preview } from './utils';
import AttachmentActionButton from './AttachmentActionButton';
import AttachmentDismissButton from './AttachmentDismissButton';

const FileUploaderAttachment = (props: SpiritFileUploaderAttachmentProps) => {
  const {
    file,
    hasImagePreview,
    id,
    label,
    name,
    onDismiss,
    onError,
    onEdit,
    iconName = DEFAULT_ICON_NAME,
    buttonLabel = DEFAULT_BUTTON_LABEL,
    editButtonLabel = DEFAULT_EDIT_BUTTON_LABEL,
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
    image2Base64Preview(file, 100, (compressedDataURL) => setImagePreview(compressedDataURL));
  }

  useFileUploaderAttachment({ attachmentRef, file, name, onError });

  return (
    <li
      id={id}
      ref={attachmentRef}
      {...transferProps}
      {...styleProps}
      className={classNames(classProps.attachment.root, styleProps.className)}
    >
      {hasImagePreview && imagePreview ? (
        <AttachmentImagePreview label={label} imagePreview={imagePreview} />
      ) : (
        <Icon name={iconName} aria-hidden="true" />
      )}
      <span className={classProps.attachment.name}>
        <span className="text-truncate">{label}</span>
      </span>
      {onEdit && (
        <span className={classProps.attachment.slot}>
          <AttachmentActionButton onClick={onEditHandler}>{editButtonLabel}</AttachmentActionButton>
        </span>
      )}
      <AttachmentDismissButton onClick={dismissHandler}>{buttonLabel}</AttachmentDismissButton>
    </li>
  );
};

export default FileUploaderAttachment;
