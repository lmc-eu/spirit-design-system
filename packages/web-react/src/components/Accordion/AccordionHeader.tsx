'use client';

import React, { type ElementType } from 'react';
import { useStyleProps } from '../../hooks';
import { type SpiritAccordionHeaderProps } from '../../types';
import { mergeStyleProps } from '../../utils';
import { Icon } from '../Icon';
import { useAccordionContext } from './AccordionContext';
import { useAccordionItemContext } from './AccordionItemContext';
import { useAccordionAriaProps } from './useAccordionAriaProps';
import { useAccordionStyleProps } from './useAccordionStyleProps';
import { useOpenItem } from './useOpenItem';

const defaultProps: Partial<SpiritAccordionHeaderProps> = {
  elementType: 'h3',
};

const AccordionHeader = <T extends ElementType = 'h3'>(props: SpiritAccordionHeaderProps<T>) => {
  const propsWithDefaults = { ...defaultProps, ...props };
  const { elementType: ElementTag = 'h3', children, slot, ...restProps } = propsWithDefaults;
  const { classProps } = useAccordionStyleProps();
  const { toggle } = useAccordionContext();
  const { id } = useAccordionItemContext();
  const { styleProps, props: transferProps } = useStyleProps(restProps);
  const { isOpen } = useOpenItem(id);
  const { triggerProps, headerProps } = useAccordionAriaProps({ id, isOpen });
  const mergedStyleProps = mergeStyleProps(ElementTag, {
    classProps: classProps.header,
    styleProps,
  });

  const itemToggle = () => {
    if (toggle && id) {
      toggle(id);
    }
  };

  return (
    <ElementTag {...transferProps} {...mergedStyleProps} {...headerProps}>
      <button type="button" className={classProps.toggle} onClick={itemToggle} {...triggerProps}>
        {children}
      </button>
      <span className={classProps.side}>
        {slot && <span className={classProps.slot}>{slot}</span>}
        <span className={classProps.icon}>
          <Icon name="chevron-down" />
        </span>
      </span>
    </ElementTag>
  );
};

AccordionHeader.spiritComponent = 'AccordionHeader';
AccordionHeader.spiritDefaultElement = 'h3' as const;
AccordionHeader.spiritDefaultProps = null as unknown as SpiritAccordionHeaderProps<'h3'>;

export default AccordionHeader;
