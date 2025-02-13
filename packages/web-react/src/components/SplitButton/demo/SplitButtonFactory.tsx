import React, { useState } from 'react';
import DocsSection from '../../../../docs/DocsSections';
import { Sizes } from '../../../constants';
import { ButtonColor } from '../../../types';
import { Button } from '../../Button';
import { Dropdown, DropdownPopover, DropdownTrigger } from '../../Dropdown';
import { Icon } from '../../Icon';
import { Tooltip, TooltipPopover, TooltipTrigger } from '../../Tooltip';
import { VisuallyHidden } from '../../VisuallyHidden';
import SplitButton from '../SplitButton';

const SplitButtonDemoFactory = <C extends void>(props: {
  color?: ButtonColor<C>;
  disabled?: boolean;
  showColorInTitle?: boolean;
}) => {
  const { color, disabled, showColorInTitle = true } = props;
  const sizes = Object.values(Sizes);

  const [openDropdownStates, setOpenDropdownStates] = useState<Record<string, boolean>>({});
  const onToggleDropdown = (id: string) => {
    setOpenDropdownStates((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const [openTooltipStates, setOpenTooltipStates] = useState<Record<string, boolean>>({});
  const onToggleTooltip = (id: string, isOpen: boolean) => {
    setOpenTooltipStates((prev) => ({
      ...prev,
      [id]: isOpen,
    }));
  };

  const titleColor = showColorInTitle ? `, color ${color}` : '';

  return (
    <>
      {sizes.map((size) => (
        <DocsSection key={size} title={`Size ${size}${titleColor}`} container="none">
          <SplitButton color={color} size={size}>
            <Button isDisabled={disabled}>
              <Icon name="check-plain" marginRight="space-400" />
              Button
            </Button>
            <Dropdown
              id={`split-button-dropdown-${color}-${size}-1`}
              isOpen={!!openDropdownStates[`${color}-${size}-1`]}
              onToggle={() => onToggleDropdown(`${color}-${size}-1`)}
              placement="bottom-end"
            >
              <DropdownTrigger elementType={Button} isDisabled={disabled}>
                More
                <Icon name="chevron-down" marginLeft="space-400" />
              </DropdownTrigger>
              <DropdownPopover>Dropdown content</DropdownPopover>
            </Dropdown>
          </SplitButton>

          <SplitButton color={color} size={size}>
            <Button isDisabled={disabled}>
              <Icon name="check-plain" marginRight="space-400" />
              Button
            </Button>
            <Button isDisabled={disabled}>Button</Button>
            <Dropdown
              id={`split-button-dropdown-${color}-${size}-2`}
              isOpen={!!openDropdownStates[`${color}-${size}-2`]}
              onToggle={() => onToggleDropdown(`${color}-${size}-2`)}
              placement="bottom-end"
            >
              <DropdownTrigger elementType={Button} isDisabled={disabled}>
                <VisuallyHidden>More</VisuallyHidden>
                <Icon name="chevron-down" />
              </DropdownTrigger>
              <DropdownPopover>Dropdown content</DropdownPopover>
            </Dropdown>
          </SplitButton>

          <SplitButton color={color} size={size}>
            <Button isDisabled={disabled}>
              <Icon name="check-plain" marginRight="space-400" />
              Button
            </Button>
            <Dropdown
              id={`split-button-dropdown-${color}-${size}-3`}
              isOpen={!!openDropdownStates[`${color}-${size}-3`]}
              onToggle={() => onToggleDropdown(`${color}-${size}-3`)}
              placement="bottom-end"
            >
              <DropdownTrigger elementType={Button} isDisabled={disabled}>
                <VisuallyHidden>More</VisuallyHidden>
                <Icon name="chevron-down" />
              </DropdownTrigger>
              <DropdownPopover>Dropdown content</DropdownPopover>
            </Dropdown>
          </SplitButton>

          <SplitButton color={color} size={size}>
            <Button isDisabled={disabled}>
              <VisuallyHidden>download</VisuallyHidden>
              <Icon name="download" />
            </Button>
            <Button isDisabled={disabled}>
              <VisuallyHidden>edit</VisuallyHidden>
              <Icon name="edit" />
            </Button>
            <Button isDisabled={disabled}>
              <VisuallyHidden>link</VisuallyHidden>
              <Icon name="link" />
            </Button>
          </SplitButton>

          <SplitButton color={color} size={size}>
            <Tooltip
              id={`tooltip-${color}-${size}-1`}
              isOpen={!!openTooltipStates[`${color}-${size}-1`]}
              onToggle={(isOpen) => onToggleTooltip(`${color}-${size}-1`, isOpen)}
              placement="top"
              trigger={['hover']}
              flipFallbackPlacements={['bottom']}
            >
              <TooltipTrigger elementType={Button} isDisabled={disabled}>
                <VisuallyHidden>download</VisuallyHidden>
                <Icon name="download" />
              </TooltipTrigger>
              <TooltipPopover>Hello there!</TooltipPopover>
            </Tooltip>
            <Tooltip
              id={`tooltip-${color}-${size}-2`}
              isOpen={!!openTooltipStates[`${color}-${size}-2`]}
              onToggle={(isOpen) => onToggleTooltip(`${color}-${size}-2`, isOpen)}
              trigger={['hover']}
              placement="top"
              flipFallbackPlacements={['bottom']}
            >
              <TooltipTrigger elementType={Button} isDisabled={disabled}>
                <VisuallyHidden>link</VisuallyHidden>
                <Icon name="link" />
              </TooltipTrigger>
              <TooltipPopover>Hello there!</TooltipPopover>
            </Tooltip>
          </SplitButton>
        </DocsSection>
      ))}
    </>
  );
};

export default SplitButtonDemoFactory;
