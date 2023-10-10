import { CSSProperties } from 'react';
import classNames from 'classnames';
import { useClassNamePrefix } from '../../hooks';
import { FileQueueValueMetaType, FileUploaderQueueLimitBehaviorType, Validation } from '../../types';

export interface FileUploaderStyleProps extends Validation {
  isDragAndDropSupported?: boolean;
  isLabelHidden?: boolean;
  isDisabled?: boolean;
  isDisabledByQueueLimitBehavior?: boolean;
  isDragging?: boolean;
  isDropZoneHidden?: boolean;
  isFluid?: boolean;
  queueLimitBehavior?: FileUploaderQueueLimitBehaviorType;
  meta?: FileQueueValueMetaType;
}

interface ImageCropCSS extends CSSProperties {
  '--file-uploader-attachment-image-top'?: string;
  '--file-uploader-attachment-image-left'?: string;
  '--file-uploader-attachment-image-width'?: string;
  '--file-uploader-attachment-image-height'?: string;
}

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
    imageCropStyles: ImageCropCSS | undefined;
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

  const { x, y, width, height } = props?.meta || {};
  const hasCoords = x != null && y != null && width != null && height != null;
  const imageCropCSS: ImageCropCSS = {
    '--file-uploader-attachment-image-top': `-${props?.meta?.y}px`,
    '--file-uploader-attachment-image-left': `-${props?.meta?.x}px`,
    '--file-uploader-attachment-image-width': `${props?.meta?.width}px`,
    '--file-uploader-attachment-image-height': `${props?.meta?.height}px`,
  };

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
      imageCropStyles: hasCoords ? imageCropCSS : undefined,
    },
  };
};
