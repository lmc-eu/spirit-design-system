import { renderHook } from '@testing-library/react';
import { Direction } from '../../../constants';
import { SpiritNavigationActionProps } from '../../../types';
import { NavigationActionVariants } from '../constants';
import { useNavigationStyleProps } from '../useNavigationStyleProps';

const navigationActionVariantDataProvider = [
  {
    variant: NavigationActionVariants.BOX,
    className: 'NavigationAction--box',
    description: 'box variant',
  },
  {
    variant: NavigationActionVariants.PILL,
    className: 'NavigationAction--pill',
    description: 'pill variant',
  },
];

describe('useNavigationStyleProps', () => {
  it('should return defaults', () => {
    const props: SpiritNavigationActionProps = {};
    const { result } = renderHook(() => useNavigationStyleProps(props));

    expect(result.current.classProps.root).toBe('Navigation Navigation--horizontal');
    expect(result.current.classProps.action).toBe('NavigationAction NavigationAction--box');
    expect(result.current.classProps.item).toBe('NavigationItem NavigationItem--alignmentYCenter');
  });

  it.each(navigationActionVariantDataProvider)(
    `should return disabled class for $description`,
    ({ variant, className }) => {
      const props: SpiritNavigationActionProps = { isDisabled: true, variant };
      const { result } = renderHook(() => useNavigationStyleProps(props));

      expect(result.current.classProps.action).toBe(`NavigationAction ${className} NavigationAction--disabled`);
    },
  );

  it.each(navigationActionVariantDataProvider)(
    'should return selected class for $description',
    ({ variant, className }) => {
      const props = { isSelected: true, variant };
      const { result } = renderHook(() => useNavigationStyleProps(props));

      expect(result.current.classProps.action).toBe(`NavigationAction ${className} NavigationAction--selected`);
    },
  );

  it('should return pill variant default class', () => {
    const props = { variant: NavigationActionVariants.PILL };
    const { result } = renderHook(() => useNavigationStyleProps(props));

    expect(result.current.classProps.action).toBe('NavigationAction NavigationAction--pill');
  });

  it('should return alignment class', () => {
    const props = { alignmentY: 'stretch' };
    const { result } = renderHook(() => useNavigationStyleProps(props));

    expect(result.current.classProps.item).toBe('NavigationItem NavigationItem--alignmentYStretch');
  });

  it('should return correct class if navigation is vertical', () => {
    const props = { direction: Direction.VERTICAL };
    const { result } = renderHook(() => useNavigationStyleProps(props));

    expect(result.current.classProps.root).toBe('Navigation Navigation--vertical');
  });
});
