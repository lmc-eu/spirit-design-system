import React from 'react';
import { FileMetadata } from '../../types/fileUploader';
import { IMAGE_DIMENSION } from './constants';
import { useFileUploaderStyleProps } from './useFileUploaderStyleProps';

type AttachmentImagePreviewProps = {
  imagePreview: string;
  label: string;
  meta?: FileMetadata;
};

const AttachmentImagePreview = ({ label, imagePreview, meta }: AttachmentImagePreviewProps) => {
  const { classProps } = useFileUploaderStyleProps({ meta });
  const { imageCropStyles } = classProps;

  return (
    <span className={classProps.attachment.image}>
      <img src={imagePreview} width={IMAGE_DIMENSION} height={IMAGE_DIMENSION} alt={label} style={imageCropStyles} />
    </span>
  );
};

AttachmentImagePreview.defaultProps = {
  meta: undefined,
};

export default AttachmentImagePreview;
