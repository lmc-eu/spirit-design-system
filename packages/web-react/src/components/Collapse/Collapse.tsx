import React, { useRef, MutableRefObject } from 'react';
import classNames from 'classnames';
import { SpiritCollapseProps } from '../../types';
import { useStyleProps } from '../../hooks/styleProps';
import { useCollapseStyleProps } from './useCollapseStyleProps';
import { useCollapseAriaProps } from './useCollapseAriaProps';
import { useResizeHeight } from './useResizeHeight';

const defaultProps = {
  isOpen: false,
  collapsibleToBreakpoint: undefined,
};

const Collapse = (props: SpiritCollapseProps) => {
  const { elementType: ElementTag = 'div', children, ...restProps } = props;

  const collapseElementRef: MutableRefObject<HTMLDivElement | null> = useRef(null);
  const collapseHeight = useResizeHeight(collapseElementRef);

  const { classProps } = useCollapseStyleProps(restProps.isOpen);
  const { ariaProps, props: otherProps } = useCollapseAriaProps(restProps);
  const { styleProps, props: transferProps } = useStyleProps(otherProps);
  const collapseStyleProps = {
    className: styleProps.className,
    ...{ style: { height: restProps.isOpen ? collapseHeight : 0, ...styleProps.style } },
  };

  return (
    <ElementTag
      {...transferProps}
      {...collapseStyleProps}
      {...ariaProps.root}
      className={classNames(classProps.root, styleProps.className)}
    >
      <div ref={collapseElementRef} className={classProps.content}>
        {children}
      </div>
    </ElementTag>
  );
};

Collapse.defaultProps = defaultProps;

export default Collapse;
