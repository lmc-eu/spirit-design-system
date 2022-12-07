import React from 'react';
import classNames from 'classnames';
import { Collapse } from '../Collapse';
import { AccordionContentProps } from '../../types';
import { useStyleProps } from '../../hooks/styleProps';
import { useAccordionStyleProps } from './useAccordionStyleProps';
import { useAccordionItemContext } from './AccordionItemContext';
import { useAccordionAriaProps } from './useAccordionAriaProps';
import { useOpenItem } from './useOpenItem';

const AccordionContent: React.FC<AccordionContentProps> = ({ children, ...restProps }) => {
  const { classProps } = useAccordionStyleProps();
  const { id } = useAccordionItemContext();
  const { styleProps, props: transferProps } = useStyleProps(restProps);
  const { isOpen } = useOpenItem(id);
  const { contentProps } = useAccordionAriaProps({ id, isOpen });

  return (
    <Collapse isOpen={isOpen} {...contentProps}>
      <div {...transferProps} {...styleProps} className={classNames(classProps.content, styleProps.className)}>
        {children}
      </div>
    </Collapse>
  );
};

export default AccordionContent;
