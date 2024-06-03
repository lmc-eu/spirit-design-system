import classNames from 'classnames';
import React, { useMemo } from 'react';
import { useStyleProps } from '../../hooks';
import { SpiritFileUploaderListProps } from '../../types';
import { useFileUploaderContext } from './FileUploaderContext';
import { useFileUploaderStyleProps } from './useFileUploaderStyleProps';

const FileUploaderList = (props: SpiritFileUploaderListProps) => {
  const { label, id, attachmentComponent, inputName, hasImagePreview, ...restProps } = props;

  const { classProps } = useFileUploaderStyleProps();
  const { styleProps, props: transferProps } = useStyleProps(restProps);
  const { fileQueue, onDismiss } = useFileUploaderContext();

  const renderAttachments = useMemo(() => {
    const fileArray = Array.from(fileQueue, (entry) => ({ key: entry[0], file: entry[1].file, meta: entry[1].meta }));

    return fileArray.map(
      ({ key, file, meta }) =>
        attachmentComponent &&
        attachmentComponent({
          id: key,
          label: file.name,
          name: inputName,
          file,
          meta,
          onDismiss,
          hasImagePreview,
        }),
    );
  }, [attachmentComponent, fileQueue, inputName, onDismiss, hasImagePreview]);

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
