import React, { useState } from 'react';
import { type UncontrolledSplitButtonProps } from '../../types';
import { Button } from '../Button';
import { Dropdown, DropdownPopover, DropdownTrigger } from '../Dropdown';
import { Icon } from '../Icon';
import { VisuallyHidden } from '../VisuallyHidden';
import SplitButton from './SplitButton';

const defaultProps: Partial<UncontrolledSplitButtonProps> = {
  dropdownPlacement: 'bottom-end',
  dropdownTriggerIconName: 'chevron-down',
};

const UncontrolledSplitButton = (props: UncontrolledSplitButtonProps) => {
  const propsWithDefaults = { ...defaultProps, ...props };
  const {
    buttonIconName,
    buttonLabel,
    buttonOnClick,
    children,
    dropdownTriggerIconName,
    dropdownTriggerLabel,
    dropdownPlacement,
    id,
    isButtonLabelHidden,
    isDisabled,
    isDropdownTriggerLabelHidden,
    ...restProps
  } = propsWithDefaults;
  const [openDropdownState, setOpenDropdownState] = useState(false);

  return (
    <SplitButton {...restProps} id={id} isDisabled={isDisabled}>
      <Button onClick={buttonOnClick}>
        {buttonIconName && <Icon name={buttonIconName} marginRight={!isButtonLabelHidden && 'space-400'} />}
        {isButtonLabelHidden ? <VisuallyHidden>{buttonLabel}</VisuallyHidden> : buttonLabel}
      </Button>
      <Dropdown
        id={`${id}-dropdown`}
        isOpen={openDropdownState}
        onToggle={() => setOpenDropdownState(!openDropdownState)}
        placement={dropdownPlacement}
      >
        <DropdownTrigger elementType={Button}>
          {isDropdownTriggerLabelHidden ? (
            <VisuallyHidden>{dropdownTriggerLabel}</VisuallyHidden>
          ) : (
            dropdownTriggerLabel
          )}
          <Icon name={dropdownTriggerIconName} marginLeft={!isDropdownTriggerLabelHidden && 'space-400'} />
        </DropdownTrigger>
        <DropdownPopover>{children}</DropdownPopover>
      </Dropdown>
    </SplitButton>
  );
};

export default UncontrolledSplitButton;
