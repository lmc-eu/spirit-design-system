import classNames from 'classnames';
import { useClassNamePrefix } from '../../hooks';
import { BackgroundColorsDictionaryType, SpaceToken } from '../../types';

export interface UseBoxStyleProps {
  backgroundColor?: BackgroundColorsDictionaryType;
  borderColor?: string;
  borderRadius?: string;
  borderWidth?: string;
  paddingTop?: SpaceToken;
  paddingBottom?: SpaceToken;
  paddingLeft?: SpaceToken;
  paddingRight?: SpaceToken;
}

export interface UseBoxStylePropsReturn {
  classProps: string;
}

export function useBoxStyleProps(props?: UseBoxStyleProps): UseBoxStylePropsReturn {
  const {
    backgroundColor,
    borderColor,
    borderRadius,
    borderWidth,
    paddingTop,
    paddingBottom,
    paddingLeft,
    paddingRight,
  } = props || {};
  const boxClass = useClassNamePrefix('Box');

  const boxClasses = classNames(boxClass, {});

  return {
    classProps: boxClasses,
  };
}
