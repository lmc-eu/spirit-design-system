import classNames from 'classnames';
import { useClassNamePrefix } from '../../hooks';
import { ScrollViewDirectionType, ScrollViewEdgeIndicatorType } from '../../types';

export interface UseScrollViewStyleProps {
  direction: ScrollViewDirectionType;
  edgeIndicators: ScrollViewEdgeIndicatorType;
  isScrollbarDisabled?: boolean;
  isScrolledAtEnd: boolean;
  isScrolledAtStart: boolean;
}

export interface UseScrollViewStyleReturn {
  /** className props */
  classProps: {
    root: string;
    viewport: string;
    content: string;
    indicators: string;
  };
}

export const useScrollViewStyleProps = ({
  direction,
  edgeIndicators,
  isScrollbarDisabled,
  isScrolledAtEnd,
  isScrolledAtStart,
}: UseScrollViewStyleProps): UseScrollViewStyleReturn => {
  const scrollViewRootClass = useClassNamePrefix('ScrollView');
  const scrollViewRootDirectionClass = `${scrollViewRootClass}--${direction}`;
  const scrollViewRootScrollbarDisabledClass = `${scrollViewRootClass}--scrollbarDisabled`;
  const scrollViewViewportClass = `${scrollViewRootClass}__viewport`;
  const scrollViewContentClass = `${scrollViewRootClass}__content`;
  const scrollViewIndicatorsClass = `${scrollViewRootClass}__indicators`;
  const scrollViewRootEdgeIndicatorClasses = {
    shadows: `${scrollViewIndicatorsClass}--shadows`,
    borders: `${scrollViewIndicatorsClass}--borders`,
    both: classNames(`${scrollViewIndicatorsClass}--shadows`, `${scrollViewIndicatorsClass}--borders`),
  };
  const scrollViewRootEdgeIndicatorClass = scrollViewRootEdgeIndicatorClasses[edgeIndicators];
  const scrollViewAtStartClass = 'is-scrolled-at-start';
  const scrollViewAtEndClass = 'is-scrolled-at-end';

  return {
    classProps: {
      root: classNames(scrollViewRootClass, scrollViewRootDirectionClass, {
        [scrollViewRootScrollbarDisabledClass]: isScrollbarDisabled,
        [scrollViewAtEndClass]: isScrolledAtEnd,
        [scrollViewAtStartClass]: isScrolledAtStart,
      }),
      viewport: scrollViewViewportClass,
      content: scrollViewContentClass,
      indicators: classNames(scrollViewIndicatorsClass, scrollViewRootEdgeIndicatorClass),
    },
  };
};
