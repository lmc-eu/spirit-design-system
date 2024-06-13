import classNames from 'classnames';
import { ElementType } from 'react';
import { useClassNamePrefix } from '../../hooks';
import { AvatarSize, SpiritAvatarProps } from '../../types';
import { applySize, compose } from '../../utils';

export interface AvatarStyles<E extends ElementType = ElementType, S = void> {
  /** className props */
  classProps: string;
  /** props to be passed to the element */
  props: SpiritAvatarProps<E, S>;
}

const getAvatarSizeClassname = <S = void>(className: string, size: AvatarSize<S>): string =>
  compose(applySize<AvatarSize<S>>(size))(className);

export function useAvatarStyleProps<E extends ElementType = ElementType, S = void>(
  props: SpiritAvatarProps<E, S>,
): AvatarStyles<E, S> {
  const { isSquare, size, ...restProps } = props;

  const avatarClass = useClassNamePrefix('UNSTABLE_Avatar');
  const avatarSquareClass = `${avatarClass}--square`;

  const classProps = classNames(avatarClass, getAvatarSizeClassname(avatarClass, size as AvatarSize<S>), {
    [avatarSquareClass]: isSquare,
  });

  return {
    classProps,
    props: restProps,
  };
}
