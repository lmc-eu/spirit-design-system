import classNames from 'classnames';
import { useClassNamePrefix } from '../../hooks';
import { type SpiritFooterProps } from '../../types';

export interface FooterStyle {
  classProps: string;
}

export const useFooterStyleProps = (props: SpiritFooterProps): FooterStyle => {
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
