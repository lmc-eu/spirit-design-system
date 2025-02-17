import React from 'react';
import { Item } from '../../Item';
import UncontrolledSplitButton from '../UncontrolledSplitButton';

const UncontrolledSplitButtonDemo = () => (
  <UncontrolledSplitButton
    buttonIconName="check-plain"
    buttonLabel="Button"
    buttonOnClick={() => alert('Button clicked')}
    color="primary"
    dropdownPlacement="top-end"
    dropdownTriggerIconName="more"
    dropdownTriggerLabel="More"
    id="uncontrolled-split-button"
    isButtonLabelHidden
    isDisabled={false}
    isDropdownTriggerLabelHidden
    size="large"
  >
    <Item label="Item 1" />
    <Item label="Item 2" />
  </UncontrolledSplitButton>
);

export default UncontrolledSplitButtonDemo;
