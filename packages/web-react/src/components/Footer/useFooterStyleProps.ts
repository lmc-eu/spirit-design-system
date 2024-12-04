import classNames from 'classnames';
import { SpiritFooterProps } from '../../types';

export interface UseFooterStyleProps {
  classProps: string;
}

export function useFooterStyleProps(props: Partial<SpiritFooterProps>): UseFooterStyleProps {
  const { backgroundColor, paddingBottom, paddingTop } = props;

  const footerBackgroundColor = backgroundColor ? `bg-${backgroundColor}` : '';
  const footerPaddingBottom = paddingBottom ? paddingBottom.replace('space-', 'pb-') : '';
  const footerPaddingTop = paddingTop ? paddingTop.replace('space-', 'pt-') : '';

  const classProps = classNames({
    [footerBackgroundColor]: backgroundColor,
    [footerPaddingBottom]: paddingBottom,
    [footerPaddingTop]: paddingTop,
  });

  return {
    classProps,
  };
}
