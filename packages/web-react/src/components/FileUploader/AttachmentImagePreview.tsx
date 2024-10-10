'use client';

import React from 'react';
import { FileMetadata } from '../../types/fileUploader';
import { IMAGE_DIMENSION } from './constants';
import { useFileUploaderStyleProps } from './useFileUploaderStyleProps';

type AttachmentImagePreviewProps = {
  imagePreview: string;
  label: string;
  meta?: FileMetadata;
  imageObjectFit?: 'contain' | 'cover';
};

const defaultProps: Partial<AttachmentImagePreviewProps> = {
  meta: undefined,
  imageObjectFit: 'cover',
};

const AttachmentImagePreview = (props: AttachmentImagePreviewProps) => {
  const { label, imagePreview, meta = defaultProps.meta, imageObjectFit = defaultProps.imageObjectFit } = props;
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
