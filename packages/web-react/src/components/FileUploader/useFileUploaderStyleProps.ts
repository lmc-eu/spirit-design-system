import { CSSProperties } from 'react';
import classNames from 'classnames';
import { FileUploaderCropCSS } from '../../constants/dictionaries';
import { useClassNamePrefix } from '../../hooks';
import { FileMetadata, FileUploaderQueueLimitBehaviorType, Validation } from '../../types';

export interface FileUploaderStyleProps extends Validation {
  imageObjectFit?: 'contain' | 'cover';
  isDisabled?: boolean;
  isDisabledByQueueLimitBehavior?: boolean;
  isDragAndDropSupported?: boolean;
  isDragging?: boolean;
  isDropZoneHidden?: boolean;
  isFluid?: boolean;
  isLabelHidden?: boolean;
  meta?: FileMetadata;
  queueLimitBehavior?: FileUploaderQueueLimitBehaviorType;
}

type ImageCropCSS = {
  [FileUploaderCropCSS.TOP]?: string;
  [FileUploaderCropCSS.LEFT]?: string;
  [FileUploaderCropCSS.WIDTH]?: string;
  [FileUploaderCropCSS.HEIGHT]?: string;
} & CSSProperties;

type ImageObjectFit = {
  '--file-uploader-attachment-image-object-fit': string;
};

export interface FileUploaderStyleReturn {
  /** className props */
  classProps: {
    root: string;
    input: {
      root: string;
      label: string;
      input: string;
      dropLabel: string;
      helper: string;
      link: string;
      validationText: string;
      dropZone: {
        root: string;
        label: string;
      };
    };
    list: string;
    attachment: {
      root: string;
      button: string;
      name: string;
      image: string;
      slot: string;
    };
    imageCropStyles?: ImageCropCSS;
    attachmentStyles?: ImageObjectFit;
  };
}

export const useFileUploaderStyleProps = (props?: FileUploaderStyleProps): FileUploaderStyleReturn => {
  const fileUploaderClass = useClassNamePrefix('FileUploader');
  const fileUploaderHasDragAndDropClass = 'has-drag-and-drop';
  const fileUploaderFluidClass = `${fileUploaderClass}--fluid`;
  const fileUploaderInputClass = `${fileUploaderClass}Input`;
  const fileUploaderInputDisabledClass = `${fileUploaderInputClass}--disabled`;
  const fileUploaderInputValidationClass = `${fileUploaderInputClass}--${props?.validationState}`;
  const fileUploaderInputDraggingClass = 'is-dragging';
  const fileUploaderInputDropLabelClass = `${fileUploaderInputClass}__dragAndDropLabel`;
  const fileUploaderInputDropZoneClass = `${fileUploaderInputClass}__dropZone`;
  const fileUploaderInputDropZoneLabelClass = `${fileUploaderInputDropZoneClass}Label`;
  const fileUploaderInputHelperClass = `${fileUploaderInputClass}__helperText`;
  const fileUploaderInputHiddenClass = 'd-none';
  const fileUploaderInputInputClass = `${fileUploaderInputClass}__input`;
  const fileUploaderInputLabelClass = `${fileUploaderInputClass}__label`;
  const fileUploaderInputLabelHiddenClass = `${fileUploaderInputClass}__label--hidden`;
  const fileUploaderInputLabelRequiredClass = `${fileUploaderInputClass}__label--required`;
  const fileUploaderInputLinkClass = `${fileUploaderInputClass}__link`;
  const fileUploaderInputLinkUtilityClasses = ['link-primary', 'link-underlined'];
  const fileUploaderInputValidationTextClass = `${fileUploaderInputClass}__validationText`;
  const fileUploaderListClass = `${fileUploaderClass}List`;
  const fileUploaderAttachmentClass = `${fileUploaderClass}Attachment`;
  const fileUploaderAttachmentNameClass = `${fileUploaderAttachmentClass}__name`;
  const fileUploaderAttachmentButtonClass = `${fileUploaderAttachmentClass}__action`;
  const fileUploaderAttachmentImageClass = `${fileUploaderAttachmentClass}__image`;
  const fileUploaderAttachmentSlotClass = `${fileUploaderAttachmentClass}__slot`;

  const { meta, imageObjectFit } = props || {};
  let imageCropCSS: ImageCropCSS | undefined;
  let imageObjectFitCSS: ImageObjectFit | undefined;
  const hasCoords = meta && meta.x != null && meta.y != null && meta.width != null && meta.height != null;

  if (hasCoords) {
    const { x, y, width, height } = meta;

    imageCropCSS = {
      [FileUploaderCropCSS.TOP]: `-${y}px`,
      [FileUploaderCropCSS.LEFT]: `-${x}px`,
      [FileUploaderCropCSS.WIDTH]: `${width}px`,
      [FileUploaderCropCSS.HEIGHT]: `${height}px`,
    };
  }

  if (imageObjectFit) {
    imageObjectFitCSS = {
      '--file-uploader-attachment-image-object-fit': imageObjectFit,
    };
  }

  return {
    classProps: {
      root: classNames(fileUploaderClass, { [fileUploaderFluidClass]: props?.isFluid }),
      input: {
        root: classNames(fileUploaderInputClass, {
          [fileUploaderHasDragAndDropClass]: props?.isDragAndDropSupported,
          [fileUploaderInputDisabledClass]:
            props?.isDisabled || (props?.isDisabledByQueueLimitBehavior && props?.queueLimitBehavior === 'disable'),
          [fileUploaderInputDraggingClass]: props?.isDragging,
          [fileUploaderInputHiddenClass]: props?.isDropZoneHidden && props.queueLimitBehavior === 'hide',
          [fileUploaderInputValidationClass]: props?.validationState,
        }),
        label: classNames(fileUploaderInputLabelClass, {
          [fileUploaderInputLabelRequiredClass]: props?.isRequired,
          [fileUploaderInputLabelHiddenClass]: props?.isLabelHidden,
        }),
        input: fileUploaderInputInputClass,
        dropLabel: fileUploaderInputDropLabelClass,
        helper: fileUploaderInputHelperClass,
        link: classNames(fileUploaderInputLinkClass, ...fileUploaderInputLinkUtilityClasses),
        validationText: fileUploaderInputValidationTextClass,
        dropZone: {
          root: fileUploaderInputDropZoneClass,
          label: fileUploaderInputDropZoneLabelClass,
        },
      },
      list: fileUploaderListClass,
      attachment: {
        root: fileUploaderAttachmentClass,
        button: fileUploaderAttachmentButtonClass,
        name: fileUploaderAttachmentNameClass,
        image: fileUploaderAttachmentImageClass,
        slot: fileUploaderAttachmentSlotClass,
      },
      ...(hasCoords && { imageCropStyles: imageCropCSS }),
      ...(imageObjectFit && { attachmentStyles: imageObjectFitCSS }),
    },
  };
};
