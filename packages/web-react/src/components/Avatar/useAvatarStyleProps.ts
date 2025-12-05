import classNames from 'classnames';
import { useClassNamePrefix } from '../../hooks';
import { type AvatarBaseProps, type AvatarSize, type AvatarStyleProps } from '../../types';
import { applySize, compose } from '../../utils';

export interface AvatarStyle {
  /** className props */
  classProps: string;
  /** props to be passed to the element */
  props: AvatarBaseProps;
}

const getAvatarSizeClassname = <S = void>(className: string, size: AvatarSize<S>): string =>
  compose(applySize<AvatarSize<S>>(size))(className);

export function useAvatarStyleProps<S = void>(props: AvatarStyleProps<S>): AvatarStyle {
  const { isSquare, size, ...restProps } = props;

  const avatarClass = useClassNamePrefix('Avatar');
  const avatarSquareClass = `${avatarClass}--square`;

  const classProps = classNames(avatarClass, getAvatarSizeClassname(avatarClass, size as AvatarSize<S>), {
    [avatarSquareClass]: isSquare,
  });

  return {
    classProps,
    props: restProps,
  };
}
