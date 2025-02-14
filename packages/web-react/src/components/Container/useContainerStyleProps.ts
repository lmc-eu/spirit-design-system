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
  const { isFluid, size, ...modifiedProps } = props;

  const containerClass = useClassNamePrefix('Container');
  const containerFluidClass = `${containerClass}--fluid`;
  const containerSizeClass = `${containerClass}--${size}`;

  const classProps = classNames(containerClass, {
    [containerFluidClass]: isFluid,
    [containerSizeClass]: size,
  });

  return {
    classProps,
    props: modifiedProps,
  };
}
