import React from 'react';
import { FileQueueValueMetaType } from '../../types/fileUploader';
import { useFileUploaderStyleProps } from './useFileUploaderStyleProps';
import { IMAGE_DIMENSION } from './constants';

type AttachmentImagePreviewProps = {
  label: string;
  imagePreview: string;
  meta?: FileQueueValueMetaType;
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
