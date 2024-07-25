'use client';

import classNames from 'classnames';
import React from 'react';
import { useStyleProps } from '../../hooks';
import { SpiritAttachmentActionButtonProps } from '../../types';
import { Icon } from '../Icon';
import { VisuallyHidden } from '../VisuallyHidden';
import { useFileUploaderStyleProps } from './useFileUploaderStyleProps';

const AttachmentActionButton = (props: SpiritAttachmentActionButtonProps) => {
  const { name = 'edit', children, ...restProps } = props;

  const { classProps } = useFileUploaderStyleProps();
  const { styleProps, props: transferProps } = useStyleProps(restProps);

  return (
    <button
      type="button"
      {...transferProps}
      {...styleProps}
      className={classNames(classProps.attachment.button, styleProps.className)}
    >
      <VisuallyHidden>{children}</VisuallyHidden>
      <Icon name={name} aria-hidden="true" />
    </button>
  );
};

export default AttachmentActionButton;
