import { Placements } from '../../constants';
import { useDeprecationMessage } from '../../hooks';
import { Booleanish, ClickEvent, DropdownFullWidthMode, PlacementDictionaryType } from '../../types';

const NAME_ARIA_EXPANDED = 'aria-expanded';
const NAME_ARIA_CONTROLS = 'aria-controls';
const NAME_DATA_FULLWIDTHMODE = 'data-spirit-fullwidthmode';
const NAME_DATA_PLACEMENT = 'data-spirit-placement';

export enum fullWidthModeKeys {
  'off' = 'off',
  'mobile-only' = 'mobile-only',
  'all' = 'all',
}
export interface UseDropdownAriaPropsProps {
  /** element ID */
  id: string;
  /** open state */
  isOpen: boolean;
  /** fullWidthMode */
  fullWidthMode: DropdownFullWidthMode | undefined;
  /** placement */
  placement?: PlacementDictionaryType;
  /** toggle callback */
  toggleHandler: (event: ClickEvent) => void;
}

export interface UseDropdownAriaPropsReturn {
  /** content returned props */
  contentProps: {
    id: string;
    [NAME_DATA_FULLWIDTHMODE]?: keyof typeof fullWidthModeKeys | undefined;
    [NAME_DATA_PLACEMENT]?: PlacementDictionaryType;
  };
  /** trigger returned props */
  triggerProps: {
    [NAME_ARIA_EXPANDED]: Booleanish;
    [NAME_ARIA_CONTROLS]: string;
    onClick: (event: ClickEvent) => void;
  };
}

const deprecatedPlacements = {
  'top-left': 'top-start',
  'top-right': 'top-end',
  'right-top': 'right-start',
  'right-bottom': 'right-end',
  'bottom-left': 'bottom-start',
  'bottom-right': 'bottom-end',
  'left-top': 'left-start',
  'left-bottom': 'left-end',
};

export const useDropdownAriaProps = (props: UseDropdownAriaPropsProps): UseDropdownAriaPropsReturn => {
  const { fullWidthMode, id, isOpen, placement = Placements.BOTTOM_START, toggleHandler } = props;
  useDeprecationMessage({
    method: 'property',
    trigger: !!deprecatedPlacements[placement as keyof typeof deprecatedPlacements],
    componentName: 'Dropdown',
    propertyProps: {
      deprecatedValue: placement,
      newValue: deprecatedPlacements[placement as keyof typeof deprecatedPlacements],
      propertyName: 'placement',
    },
  });

  const triggerProps = {
    id,
    [NAME_ARIA_EXPANDED]: isOpen,
    [NAME_ARIA_CONTROLS]: String(id),
    onClick: toggleHandler,
  };
  const contentProps = {
    id,
    [NAME_DATA_FULLWIDTHMODE]: fullWidthMode,
    [NAME_DATA_PLACEMENT]: placement,
  };

  return {
    contentProps,
    triggerProps,
  };
};
