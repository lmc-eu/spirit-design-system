import classNames from 'classnames';
import { useClassNamePrefix } from '../../hooks';
import { SpiritContainerProps, ContainerProps } from '../../types';

export interface ContainerStyles {
  /** className props */
  classProps: string;
  /** props to be passed to the element */
  props: ContainerProps;
}

export function useContainerStyleProps(props: SpiritContainerProps): ContainerStyles {
  const { isFluid, ...modifiedProps } = props;

  const containerClass = useClassNamePrefix('Container');
  const containerFluidClass = `${containerClass}--fluid`;
  const classProps = classNames(containerClass, {
    [containerFluidClass]: isFluid,
  });

  return {
    classProps,
    props: modifiedProps,
  };
}
