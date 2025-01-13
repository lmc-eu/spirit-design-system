import classNames from 'classnames';
import { useClassNamePrefix } from '../../hooks';
import { SpiritFooterProps } from '../../types';

export interface UseFooterStyleProps {
  classProps: string;
}

export const useFooterStyleProps = (props: Partial<SpiritFooterProps>): UseFooterStyleProps => {
  const { backgroundColor } = props;
  const footerBackgroundClassName = useClassNamePrefix(`bg-${backgroundColor}`);

  const footerBackgroundColor = backgroundColor ? footerBackgroundClassName : '';

  const classProps = classNames({
    [footerBackgroundColor]: backgroundColor,
  });

  return {
    classProps,
  };
};
