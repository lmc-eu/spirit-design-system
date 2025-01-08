import classNames from 'classnames';
import { AlignmentYExtended } from '../../constants';
import { AlignmentPropertyType, useAlignmentClass, useClassNamePrefix } from '../../hooks';
import {
  SpiritNavigationActionProps,
  SpiritNavigationItemAlignmentYType,
  SpiritNavigationItemProps,
} from '../../types';

export interface UseNavigationStyleProps {
  isDisabled?: boolean;
  isSelected?: boolean;
  alignmentY?: SpiritNavigationItemAlignmentYType;
}

export interface UseNavigationStyleReturn {
  classProps: {
    root: string;
    action: string;
    item: string;
  };
  props: SpiritNavigationItemProps | SpiritNavigationActionProps;
}

export const useNavigationStyleProps = ({
  isDisabled = false,
  isSelected = false,
  alignmentY = AlignmentYExtended.CENTER,
  ...restProps
}: UseNavigationStyleProps = {}): UseNavigationStyleReturn => {
  const navigationClass = useClassNamePrefix('Navigation');
  const navigationActionClass = useClassNamePrefix('NavigationAction');
  const navigationItemClass = useClassNamePrefix('NavigationItem');

  const navigationActionDisabledClass = `${navigationActionClass}--disabled`;
  const navigationActionSelectedClass = `${navigationActionClass}--selected`;

  const navigationItemClasses = classNames(navigationItemClass, {
    [useAlignmentClass(navigationItemClass, alignmentY as AlignmentPropertyType, 'alignmentY')]: alignmentY,
  });

  const classProps = {
    root: navigationClass,
    action: classNames(navigationActionClass, {
      [navigationActionDisabledClass]: isDisabled,
      [navigationActionSelectedClass]: isSelected,
    }),
    item: navigationItemClasses,
  };

  return {
    classProps,
    props: restProps,
  };
};
