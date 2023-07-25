import React from 'react';
import { useFileUploaderStyleProps } from './useFileUploaderStyleProps';
import { IMAGE_DIMENSION } from './constants';

type AttachmentImagePreviewProps = {
  label: string;
  imagePreview: string;
};

const AttachmentImagePreview = ({ label, imagePreview }: AttachmentImagePreviewProps) => {
  const { classProps } = useFileUploaderStyleProps();

  return (
    <span className={classProps.attachment.image}>
      <img src={imagePreview} width={IMAGE_DIMENSION} height={IMAGE_DIMENSION} alt={label} />
    </span>
  );
};

export default AttachmentImagePreview;
