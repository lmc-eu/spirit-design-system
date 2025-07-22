'use client';

import classNames from 'classnames';
import React, { useState } from 'react';
import { useToggle } from '../../hooks';
import type { PricingPlanFeature } from '../../types/pricingPlan';
import { Icon } from '../Icon';
import { Modal, ModalBody, ModalDialog, ModalHeader } from '../Modal';
import { Tooltip, TooltipPopover, TooltipTrigger } from '../Tooltip';
import { usePricingPlanStyleProps } from './usePricingPlanStyleProps';

const PricingPlanFeatureTitle = ({
  feature,
  featureId,
  ...restProps
}: {
  feature: PricingPlanFeature;
  featureId: string;
}) => {
  const { modalContent, title, tooltipContent } = feature;
  const { classProps } = usePricingPlanStyleProps(restProps);
  const [isTooltipOpen, toggleTooltip] = useToggle(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  if (modalContent) {
    return (
      <dt className={classProps.body.featureTitle}>
        <Icon name="check-plain" boxSize={16} />
        <button
          type="button"
          onClick={() => setIsModalOpen(true)}
          className={classNames(classProps.body.featureTitleText, 'text-underlined-dotted')}
        >
          {title}
        </button>
        <Modal id={`${featureId}-modal`} isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
          <ModalDialog isScrollable>
            <ModalHeader>{title}</ModalHeader>
            <ModalBody>{modalContent}</ModalBody>
          </ModalDialog>
        </Modal>
      </dt>
    );
  }

  if (tooltipContent) {
    return (
      <Tooltip
        elementType="dt"
        id={`${featureId}-tooltip`}
        isDismissible
        isOpen={isTooltipOpen}
        onToggle={toggleTooltip}
        placement="top"
        trigger={['click']}
        UNSAFE_className={classProps.body.featureTitle}
      >
        <Icon name="check-plain" boxSize={16} />
        <TooltipTrigger
          elementType="button"
          UNSAFE_className={classNames(classProps.body.featureTitleText, 'text-underlined-dotted')}
        >
          {title}
        </TooltipTrigger>
        <TooltipPopover>
          <div>{tooltipContent}</div>
        </TooltipPopover>
      </Tooltip>
    );
  }

  return (
    <dt className={classProps.body.featureTitle}>
      <Icon name="check-plain" boxSize={16} />
      <div className={classProps.body.featureTitleText} id={`${featureId}-title`}>
        {title}
      </div>
    </dt>
  );
};

PricingPlanFeatureTitle.spiritComponent = 'PricingPlanFeatureTitle';

export default PricingPlanFeatureTitle;
