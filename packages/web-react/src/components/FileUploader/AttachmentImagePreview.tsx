'use client';

import React from 'react';
import { AttachmentImagePreviewProps } from '../../types';
import { IMAGE_DIMENSION } from './constants';
import { useFileUploaderStyleProps } from './useFileUploaderStyleProps';

const defaultProps: Partial<AttachmentImagePreviewProps> = {
  meta: undefined,
  imageObjectFit: 'cover',
};

const AttachmentImagePreview = (props: AttachmentImagePreviewProps) => {
  const propsWithDefaults = { ...defaultProps, ...props };
  const { label, imagePreview, meta, imageObjectFit } = propsWithDefaults;
  const { classProps } = useFileUploaderStyleProps({ meta, imageObjectFit });
  const { imageCropStyles, attachmentStyles } = classProps;

  return (
    <span className={classProps.attachment.image}>
      <img
        src={imagePreview}
        width={IMAGE_DIMENSION}
        height={IMAGE_DIMENSION}
        alt={label}
        style={{ ...imageCropStyles, ...attachmentStyles }}
      />
    </span>
  );
};

export default AttachmentImagePreview;
