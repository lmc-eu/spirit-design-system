import React, { useMemo } from 'react';
import classNames from 'classnames';
import { SpiritFileUploaderListProps } from '../../types';
import { useStyleProps } from '../../hooks';
import { useFileUploaderStyleProps } from './useFileUploaderStyleProps';
import { useFileUploaderContext } from './FileUploaderContext';

const FileUploaderList = (props: SpiritFileUploaderListProps) => {
  const { label, id, attachmentComponent, inputName, ...restProps } = props;

  const { classProps } = useFileUploaderStyleProps();
  const { styleProps, props: transferProps } = useStyleProps(restProps);
  const { fileQueue, onDismiss } = useFileUploaderContext();

  const renderAttachments = useMemo(() => {
    const fileArray = Array.from(fileQueue, (entry) => {
      return { key: entry[0], file: entry[1] };
    });

    return fileArray.map(
      ({ key, file }) =>
        attachmentComponent &&
        attachmentComponent({
          id: key,
          label: file.name,
          name: inputName,
          file,
          onDismiss,
        }),
    );
  }, [attachmentComponent, fileQueue, inputName, onDismiss]);

  return (
    <>
      <h3 id={id} hidden>
        {label}
      </h3>
      <ul
        aria-labelledby={id}
        {...transferProps}
        {...styleProps}
        className={classNames(classProps.list, styleProps.className)}
      >
        {renderAttachments}
      </ul>
    </>
  );
};

export default FileUploaderList;
