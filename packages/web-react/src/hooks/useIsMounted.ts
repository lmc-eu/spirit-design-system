'use client';

/**
 * This implementation is a modified copy of the `usehooks-ts` library
 *
 * @see { @link https://usehooks-ts.com/react-hook/use-is-mounted }
 */
import { useCallback, useEffect, useRef } from 'react';

/**
 * Custom hook that determines if the component is currently mounted.
 *
 * @returns {() => boolean} A function that returns a boolean value indicating whether the component is mounted.
 * @public
 * @example
 * ```tsx
 * const isComponentMounted = useIsMounted();
 * // Use isComponentMounted() to check if the component is currently mounted before performing certain actions.
 * ```
 */
export function useIsMounted(): () => boolean {
  const isMounted = useRef(false);

  useEffect(() => {
    isMounted.current = true;

    return () => {
      isMounted.current = false;
    };
  }, []);

  return useCallback(() => isMounted.current, []);
}
