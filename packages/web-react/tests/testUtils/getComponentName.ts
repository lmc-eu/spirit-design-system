import { type ComponentType } from 'react';

export const getComponentName = (Component: ComponentType<any>): string => {
  const componentName = Component.displayName || Component.name || Component.spiritComponent || 'UnknownComponent';

  return componentName;
};
