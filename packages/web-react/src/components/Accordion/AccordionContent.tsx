'use client';

import classNames from 'classnames';
import React from 'react';
import { useStyleProps } from '../../hooks';
import { AccordionContentProps } from '../../types';
import { Collapse } from '../Collapse';
import { useAccordionItemContext } from './AccordionItemContext';
import { useAccordionAriaProps } from './useAccordionAriaProps';
import { useAccordionStyleProps } from './useAccordionStyleProps';
import { useOpenItem } from './useOpenItem';

const AccordionContent = ({ children, ...restProps }: AccordionContentProps) => {
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
