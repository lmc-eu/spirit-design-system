import { useDeprecationMessage } from '../../hooks';
import { CollapseProps, BaseCollapseProps, Booleanish } from '../../types';

const ATTRIBUTE_ARIA_EXPANDED = 'aria-expanded';
const ATTRIBUTE_ARIA_CONTROLS = 'aria-controls';
const ATTRIBUTE_DATA_BREAKPOINT = 'data-spirit-breakpoint';

export interface CollapseAria {
  ariaProps: {
    /** wrapper returned props */
    root: {
      [ATTRIBUTE_DATA_BREAKPOINT]: CollapseProps['collapsibleToBreakpoint'];
    };
    /** trigger returned props */
    trigger: {
      [ATTRIBUTE_ARIA_EXPANDED]: Booleanish;
      [ATTRIBUTE_ARIA_CONTROLS]: string;
    };
  };
  props: BaseCollapseProps;
}

export const useCollapseAriaProps = (props: CollapseProps): CollapseAria => {
  const { isOpen, collapsibleToBreakpoint, ...modifiedProps } = props;

  useDeprecationMessage({
    method: 'custom',
    trigger: !modifiedProps.id,
    componentName: 'Collapse',
    customText: 'The "id" property will be required instead of optional starting from the next major version.',
  });

  return {
    ariaProps: {
      root: {
        [ATTRIBUTE_DATA_BREAKPOINT]: collapsibleToBreakpoint,
      },
      trigger: {
        [ATTRIBUTE_ARIA_EXPANDED]: isOpen,
        [ATTRIBUTE_ARIA_CONTROLS]: String(modifiedProps.id),
      },
    },
    props: modifiedProps,
  };
};
