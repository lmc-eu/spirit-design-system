import classNames from 'classnames';
import { AlignmentYExtended, Direction } from '../../constants';
import { AlignmentPropertyType, useAlignmentClass, useClassNamePrefix } from '../../hooks';
import {
  DirectionDictionaryType,
  NavigationActionVariantsType,
  SpiritNavigationActionProps,
  SpiritNavigationItemAlignmentYType,
  SpiritNavigationItemProps,
} from '../../types';
import { NavigationActionVariants } from './constants';

export interface UseNavigationStyleProps {
  alignmentY?: SpiritNavigationItemAlignmentYType;
  direction?: DirectionDictionaryType;
  isDisabled?: boolean;
  isSelected?: boolean;
  isSquare?: boolean;
  variant?: NavigationActionVariantsType;
}

export interface UseNavigationStyleReturn {
  classProps: {
    root: string;
    action: string;
    avatar: string;
    item: string;
  };
  props: SpiritNavigationItemProps | SpiritNavigationActionProps;
}

export const useNavigationStyleProps = ({
  isDisabled = false,
  isSelected = false,
  isSquare = false,
  alignmentY = AlignmentYExtended.CENTER,
  direction = Direction.HORIZONTAL,
  variant = NavigationActionVariants.BOX,
  ...restProps
}: UseNavigationStyleProps): UseNavigationStyleReturn => {
  const navigationClass = useClassNamePrefix('Navigation');
  const navigationActionClass = `${navigationClass}Action`;
  const navigationAvatarClass = `${navigationClass}Avatar`;
  const navigationItemClass = `${navigationClass}Item`;

  const navigationDirectionClass = `${navigationClass}--${direction}`;
  const navigationActionDisabledClass = `${navigationActionClass}--disabled`;
  const navigationActionSelectedClass = `${navigationActionClass}--selected`;
  const navigationActionVariantClass = `${navigationActionClass}--${variant}`;

  const navigationAvatarSquareClass = `${navigationAvatarClass}--square`;

  const navigationItemClasses = classNames(navigationItemClass, {
    [useAlignmentClass(navigationItemClass, alignmentY as AlignmentPropertyType, 'alignmentY')]: alignmentY,
  });

  const classProps = {
    root: classNames(navigationClass, navigationDirectionClass),
    action: classNames(navigationActionClass, navigationActionVariantClass, {
      [navigationActionDisabledClass]: isDisabled,
      [navigationActionSelectedClass]: isSelected,
    }),
    avatar: classNames(navigationAvatarClass, {
      [navigationAvatarSquareClass]: isSquare,
    }),
    item: navigationItemClasses,
  };

  return {
    classProps,
    props: restProps,
  };
};
