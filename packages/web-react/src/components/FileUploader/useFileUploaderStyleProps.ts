import classNames from 'classnames';
import { useClassNamePrefix } from '../../hooks';
import { Validation } from '../../types';

export interface FileUploaderStyleProps extends Validation {
  isDragAndDropSupported?: boolean;
  // isDisabled?: boolean;
  isDragging?: boolean;
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
    };
  };
}

export const useFileUploaderStyleProps = (props?: FileUploaderStyleProps): FileUploaderStyleReturn => {
  const fileUploaderClass = useClassNamePrefix('FileUploader');
  const fileUploaderHasDragAndDropClass = 'has-drag-and-drop';
  const fileUploaderInputClass = `${fileUploaderClass}Input`;
  const fileUploaderInputValidationClass = `${fileUploaderInputClass}--${props?.validationState}`;
  const fileUploaderInputDraggingClass = 'is-dragging';
  const fileUploaderInputLabelClass = `${fileUploaderInputClass}__label`;
  const fileUploaderInputLabelRequiredClass = `${fileUploaderInputClass}__label--required`;
  const fileUploaderInputInputClass = `${fileUploaderInputClass}__input`;
  const fileUploaderInputDropZoneClass = `${fileUploaderInputClass}__dropZone`;
  const fileUploaderInputDropZoneLabelClass = `${fileUploaderInputDropZoneClass}Label`;
  const fileUploaderInputDropLabelClass = `${fileUploaderInputClass}__dragAndDropLabel`;
  const fileUploaderInputHelperClass = `${fileUploaderInputClass}__helperText`;
  const fileUploaderInputLinkClass = `${fileUploaderInputClass}__link`;
  const fileUploaderInputLinkUtilityClasses = ['link-primary', 'link-underlined'];
  const fileUploaderInputValidationTextClass = `${fileUploaderInputClass}__validationText`;
  const fileUploaderListClass = `${fileUploaderClass}List`;
  const fileUploaderAttachmentClass = `${fileUploaderClass}Attachment`;
  const fileUploaderAttachmentButtonClass = `${fileUploaderAttachmentClass}__remove`;

  return {
    classProps: {
      root: fileUploaderClass,
      input: {
        root: classNames(fileUploaderInputClass, {
          [fileUploaderHasDragAndDropClass]: props?.isDragAndDropSupported,
          [fileUploaderInputValidationClass]: props?.validationState,
          [fileUploaderInputDraggingClass]: props?.isDragging,
        }),
        label: classNames(fileUploaderInputLabelClass, { [fileUploaderInputLabelRequiredClass]: props?.isRequired }),
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
      },
    },
  };
};
