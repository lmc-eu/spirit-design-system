import classNames from 'classnames';
import { useClassNamePrefix } from '../../hooks';
import { FileUploaderQueueLimitBehaviorType, Validation } from '../../types';

export interface FileUploaderStyleProps extends Validation {
  isDragAndDropSupported?: boolean;
  isLabelHidden?: boolean;
  isDisabled?: boolean;
  isDisabledByQueueLimitBehavior?: boolean;
  isDragging?: boolean;
  isDropZoneHidden?: boolean;
  queueLimitBehavior?: FileUploaderQueueLimitBehaviorType;
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
  const fileUploaderAttachmentButtonClass = `${fileUploaderAttachmentClass}__remove`;

  return {
    classProps: {
      root: fileUploaderClass,
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
      },
    },
  };
};
