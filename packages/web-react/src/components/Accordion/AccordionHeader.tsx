'use client';

import classNames from 'classnames';
import React from 'react';
import { useStyleProps } from '../../hooks';
import { AccordionHeaderProps } from '../../types';
import { Icon } from '../Icon';
import { useAccordionContext } from './AccordionContext';
import { useAccordionItemContext } from './AccordionItemContext';
import { useAccordionAriaProps } from './useAccordionAriaProps';
import { useAccordionStyleProps } from './useAccordionStyleProps';
import { useOpenItem } from './useOpenItem';

const AccordionHeader = ({ children, slot, ...restProps }: AccordionHeaderProps) => {
  const { classProps } = useAccordionStyleProps();
  const { toggle } = useAccordionContext();
  const { id } = useAccordionItemContext();
  const { styleProps, props: transferProps } = useStyleProps(restProps);
  const { isOpen } = useOpenItem(id);
  const { triggerProps, headerProps } = useAccordionAriaProps({ id, isOpen });

  const itemToggle = () => {
    if (toggle && id) {
      toggle(id);
    }
  };

  return (
    <h3
      {...transferProps}
      {...styleProps}
      {...headerProps}
      className={classNames(classProps.header, styleProps.className)}
    >
      <button type="button" className={classProps.toggle} onClick={itemToggle} {...triggerProps}>
        {children}
      </button>
      <span className={classProps.side}>
        {slot && <span className={classProps.slot}>{slot}</span>}
        <span className={classProps.icon}>
          <Icon name="chevron-down" />
        </span>
      </span>
    </h3>
  );
};

export default AccordionHeader;
