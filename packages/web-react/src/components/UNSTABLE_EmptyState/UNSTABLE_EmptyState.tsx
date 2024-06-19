import classNames from 'classnames';
import React, { ReactElement } from 'react';
import { useStyleProps } from '../../hooks';
import { SpiritEmptyStateProps } from '../../types/emptyState';
import { Stack } from '../Stack';
import { useEmptyStateStyleProps } from './useEmptyStateStyleProps';

export const UNSTABLE_EmptyState = (props: SpiritEmptyStateProps): ReactElement => {
  const { children, ...restProps } = props;
  const { classProps, props: modifiedProps } = useEmptyStateStyleProps(restProps);
  const { styleProps, props: otherProps } = useStyleProps(modifiedProps);

  return (
    <Stack
      {...otherProps}
      UNSAFE_className={classNames(classProps.root, styleProps.className)}
      UNSAFE_style={styleProps.style}
    >
      {children}
    </Stack>
  );
};

export default UNSTABLE_EmptyState;
