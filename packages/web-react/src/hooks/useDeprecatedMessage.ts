import { useEffect } from 'react';

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
    if (trigger && deprecatedPropName && newPropName) {
      // eslint-disable-next-line no-console
      console.warn(
        `Deprecation warning (${componentName}): "${deprecatedPropName}" property will be replaced in next major version. Please use "${newPropName}" instead. ♻️️`,
      );
    }

    /* We want to call this hook only once */
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};
