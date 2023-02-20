import { useEffect } from 'react';

/**
 * Deprecated: useDeprecatedMessage + UseDeprecatedMessageProps
 * Delete usages and replaced with useDeprecationMessage
 */
export interface UseDeprecatedMessageProps {
  trigger: boolean;
  componentName: string;
  deprecatedPropName: string;
  newPropName: string;
}

export const useDeprecatedMessage = ({
  trigger,
  componentName,
  deprecatedPropName,
  newPropName,
}: UseDeprecatedMessageProps): void => {
  useEffect(() => {
    if (trigger && deprecatedPropName && newPropName && process.env.NODE_ENV === 'development') {
      // eslint-disable-next-line no-console
      console.warn(
        `Deprecation warning (${componentName}): "${deprecatedPropName}" property will be replaced in next major version. Please use "${newPropName}" instead. ♻️️`,
      );
    }

    /* We want to call this hook only once */
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};

export interface UseDeprecationMessageProps {
  method?: 'component' | 'property';
  trigger: boolean;
  componentName: string;
  componentProps?: {
    newName?: string;
    delete?: boolean;
  };
  propertyProps?: {
    // Use for property name
    deprecatedName?: string;
    newName?: string;
    delete?: boolean;
    // Use for property value
    deprecatedValue?: string;
    newValue?: string;
    propertyName?: string;
  };
}

export const useDeprecationMessage = ({
  method = 'component',
  trigger,
  componentName,
  componentProps,
  propertyProps,
}: UseDeprecationMessageProps) => {
  let message: string;
  let hasProps: boolean;
  const messageBase = `Deprecation warning (${componentName}):`;

  useEffect(() => {
    const isExecutable = trigger && componentName && process.env.NODE_ENV === 'development';

    switch (method) {
      case 'property':
        if (propertyProps?.delete) {
          message = `${messageBase} "${propertyProps?.deprecatedName}" property will be deleted in the next major version..️️`;
        } else if (propertyProps?.deprecatedValue && propertyProps?.newValue && propertyProps?.propertyName) {
          message = `${messageBase} The "${propertyProps?.deprecatedValue}" value for "${propertyProps?.propertyName}" property will be renamed to "${propertyProps?.newValue}" in the next major version.`;
        } else {
          message = `${messageBase} "${propertyProps?.deprecatedName}" property will be replaced in the next major version. Please use "${propertyProps?.newName}" instead. ♻️️`;
        }
        hasProps = !!propertyProps;
        break;

      case 'component':
      default:
        if (componentProps?.delete) {
          message = `${messageBase} The component and its subcomponents will be deleted in the next major version.`;
        } else {
          message = `${messageBase} The component and its subcomponents will be renamed to "${componentProps?.newName}" in the next major version.`;
        }
        hasProps = !!componentProps;
        break;
    }

    if (message && isExecutable && hasProps) {
      // eslint-disable-next-line no-console
      console.warn(message);
    }

    /* We want to call this hook only once */
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};
