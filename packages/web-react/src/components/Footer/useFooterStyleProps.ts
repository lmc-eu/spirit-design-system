import classNames from 'classnames';
import { SpiritFooterProps } from '../../types';

export interface UseFooterStyleProps {
  classProps: string;
}

export function useFooterStyleProps(props: Partial<SpiritFooterProps>): UseFooterStyleProps {
  const { backgroundColor } = props;
  const footerBackgroundColor = backgroundColor ? `bg-${backgroundColor}` : '';

  const classProps = classNames({
    [footerBackgroundColor]: backgroundColor,
  });

  return {
    classProps,
  };
}
