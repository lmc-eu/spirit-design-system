import { SpiritCollapseProps, CollapseProps, Booleanish } from '../../types';

const ATTRIBUTE_ARIA_EXPANDED = 'aria-expanded';
const ATTRIBUTE_ARIA_CONTROLS = 'aria-controls';
const ATTRIBUTE_DATA_BREAKPOINT = 'data-breakpoint';

export interface CollapseAria {
  ariaProps: {
    /** wrapper returned props */
    root: {
      [ATTRIBUTE_DATA_BREAKPOINT]: SpiritCollapseProps['collapsibleToBreakpoint'];
    };
    /** trigger returned props */
    trigger: {
      [ATTRIBUTE_ARIA_EXPANDED]: Booleanish;
      [ATTRIBUTE_ARIA_CONTROLS]: string;
    };
  };
  props: CollapseProps;
}

export const useCollapseAriaProps = (props: SpiritCollapseProps): CollapseAria => {
  const { isCollapsed, collapsibleToBreakpoint, ...modifiedProps } = props;

  return {
    ariaProps: {
      root: {
        [ATTRIBUTE_DATA_BREAKPOINT]: collapsibleToBreakpoint,
      },
      trigger: {
        [ATTRIBUTE_ARIA_EXPANDED]: isCollapsed,
        [ATTRIBUTE_ARIA_CONTROLS]: String(modifiedProps.id),
      },
    },
    props: modifiedProps,
  };
};
