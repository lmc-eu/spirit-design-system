import React from 'react';
import classNames from 'classnames';
import { AccordionProps, AccordionContextProps } from '../../types';
import { useStyleProps } from '../../hooks/styleProps';
import { AccordionProvider } from './AccordionContext';
import { useAccordionStyleProps } from './useAccordionStyleProps';

const Accordion: React.FC<AccordionProps> = (props) => {
  const { children, elementType: ElementTag = 'section', id, open, toggle, ...restProps } = props;

  const { classProps } = useAccordionStyleProps();
  const { styleProps, props: transferProps } = useStyleProps(restProps);

  const contextValue: AccordionContextProps = {
    open,
    toggle,
  };

  return (
    <ElementTag
      {...transferProps}
      {...styleProps}
      id={id}
      className={classNames(classProps.root, styleProps.className)}
    >
      <AccordionProvider value={contextValue}>{children}</AccordionProvider>
    </ElementTag>
  );
};

export default Accordion;
