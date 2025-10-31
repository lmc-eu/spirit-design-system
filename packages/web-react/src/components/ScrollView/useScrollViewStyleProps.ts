import classNames from 'classnames';
import { useClassNamePrefix } from '../../hooks';
import { type ScrollViewDirectionType, type ScrollViewOverflowDecoratorsType } from '../../types';
import { SCROLL_VIEW_DEFAULT_OVERFLOW_DECORATOR } from './constants';

export interface UseScrollViewStyleProps {
  direction: ScrollViewDirectionType;
  isScrollbarDisabled?: boolean;
  isScrolledAtEnd: boolean;
  isScrolledAtStart: boolean;
  overflowDecorators: ScrollViewOverflowDecoratorsType;
}

export interface UseScrollViewStyleReturn {
  /** className props */
  classProps: {
    root: string;
    viewport: string;
    content: string;
    overflowDecorators: string;
    arrows: string;
  };
}

export const useScrollViewStyleProps = ({
  direction,
  isScrollbarDisabled,
  isScrolledAtEnd,
  isScrolledAtStart,
  overflowDecorators = SCROLL_VIEW_DEFAULT_OVERFLOW_DECORATOR,
}: Partial<UseScrollViewStyleProps>): UseScrollViewStyleReturn => {
  const scrollViewRootClass = useClassNamePrefix('ScrollView');
  const scrollViewRootDirectionClass = `${scrollViewRootClass}--${direction}`;
  const scrollViewRootScrollbarDisabledClass = `${scrollViewRootClass}--scrollbarDisabled`;
  const scrollViewViewportClass = `${scrollViewRootClass}__viewport`;
  const scrollViewContentClass = `${scrollViewRootClass}__content`;
  const scrollViewOverflowDecoratorsClass = `${scrollViewRootClass}__overflowDecorators`;
  const scrollViewRootOverflowDecoratorsClasses = {
    shadows: `${scrollViewOverflowDecoratorsClass}--shadows`,
    borders: `${scrollViewOverflowDecoratorsClass}--borders`,
    both: classNames(`${scrollViewOverflowDecoratorsClass}--shadows`, `${scrollViewOverflowDecoratorsClass}--borders`),
  };
  const scrollViewRootOverflowDecoratorsClass = scrollViewRootOverflowDecoratorsClasses[overflowDecorators];
  const scrollViewAtStartClass = 'is-scrolled-at-start';
  const scrollViewAtEndClass = 'is-scrolled-at-end';
  const scrollViewArrowsClass = `${scrollViewRootClass}__arrows`;

  return {
    classProps: {
      root: classNames(scrollViewRootClass, scrollViewRootDirectionClass, {
        [scrollViewRootScrollbarDisabledClass]: isScrollbarDisabled,
        [scrollViewAtEndClass]: isScrolledAtEnd,
        [scrollViewAtStartClass]: isScrolledAtStart,
      }),
      viewport: scrollViewViewportClass,
      content: scrollViewContentClass,
      overflowDecorators: classNames(scrollViewOverflowDecoratorsClass, scrollViewRootOverflowDecoratorsClass),
      arrows: scrollViewArrowsClass,
    },
  };
};
