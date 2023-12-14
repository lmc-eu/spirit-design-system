/**
 * This file fixes the problem of using useLayoutEffect hook on the server side.
 *
 * @see https://gist.github.com/gaearon/e7d97cdf38a2907924ea12e4ebdf3c85
 * @see https://medium.com/@alexandereardon/uselayouteffect-and-ssr-192986cdcf7a
 */
/* eslint-disable no-restricted-imports */
import { useEffect, useLayoutEffect } from 'react';

export const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect;
