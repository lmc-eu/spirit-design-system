import { ComponentType } from 'react';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getComponentName = (Component: ComponentType<any>): string => {
  const componentName = Component.displayName || Component.name || Component.spiritComponent || 'UnknownComponent';

  return componentName;
};
