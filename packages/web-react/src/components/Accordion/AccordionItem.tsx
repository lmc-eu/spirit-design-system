import React from 'react';
import classNames from 'classnames';
import { AccordionItemProps } from '../../types';
import { useStyleProps } from '../../hooks/styleProps';
import { useAccordionStyleProps } from './useAccordionStyleProps';
import { AccordionItemProvider } from './AccordionItemContext';

const AccordionItem: React.FC<AccordionItemProps> = (props) => {
  const { children, elementType: ElementTag = 'article', id, ...restProps } = props;

  const { classProps } = useAccordionStyleProps();
  const { styleProps, props: transferProps } = useStyleProps(restProps);

  const contextValue = { id };

  return (
    <ElementTag
      {...transferProps}
      {...styleProps}
      id={id}
      className={classNames(classProps.item, styleProps.className)}
    >
      <AccordionItemProvider value={contextValue}>{children}</AccordionItemProvider>
    </ElementTag>
  );
};

export default AccordionItem;
