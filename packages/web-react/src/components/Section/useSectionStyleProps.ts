import classNames from 'classnames';
import { type ElementType } from 'react';
import { useClassNamePrefix } from '../../hooks';
import { type SpiritSectionProps } from '../../types';

export interface UseSectionStyleProps {
  /** className props */
  classProps: string;
}

export const useSectionStyleProps = (props: Partial<SpiritSectionProps<ElementType>>): UseSectionStyleProps => {
  const { backgroundColor } = props || {};

  const sectionBackgroundClassName = useClassNamePrefix(`bg-${backgroundColor}`);

  const sectionBackgroundColor = backgroundColor ? sectionBackgroundClassName : '';

  const classProps = classNames({
    [sectionBackgroundColor]: backgroundColor,
  });

  return {
    classProps,
  };
};
