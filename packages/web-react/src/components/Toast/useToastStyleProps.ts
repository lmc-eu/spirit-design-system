import classNames from 'classnames';
import { useClassNamePrefix } from '../../hooks';
import { SpiritToastProps } from '../../types';

export interface ToastStyles<T> {
  classProps: {
    root: string;
    queue: string;
  };
  props: T;
}

export function useToastStyleProps(props: SpiritToastProps): ToastStyles<SpiritToastProps> {
  const { alignmentX, alignmentY, ...restProps } = props;

  const toastClass = useClassNamePrefix('Toast');

  function processAlignments(alignments: Array<SpiritToastProps['alignmentX'] | SpiritToastProps['alignmentY']>) {
    return alignments.map((alignment) =>
      typeof alignment === 'object' && alignment !== null
        ? Object.keys(alignment).reduce<string[]>((acc, key) => {
            const infix = key === 'mobile' ? '' : `--${key}`;

            return [...acc, `${toastClass}${infix}--${alignment[key as keyof typeof alignment]}`];
          }, [])
        : [`${toastClass}--${alignment}`],
    );
  }

  const alignmentClasses = [...processAlignments([alignmentX, alignmentY])];

  const toastRootClass = classNames(toastClass, ...alignmentClasses);
  const toastQueueClass = `${toastClass}__queue`;

  return {
    classProps: {
      root: toastRootClass,
      queue: toastQueueClass,
    },
    props: restProps,
  };
}
