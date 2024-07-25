'use client';

export * from './Button';
export * from './useButtonAriaProps';
export * from './useButtonStyleProps';
export { default as Button } from './Button';

// Export ButtonLink here for backwards compatibility
// ButtonLink is NOT exported from packages/web-react/src/components/index.ts
// ButtonLink will be removed in a future release and Button should be used instead
// [web-react: Polymorfní Button](https://jira.lmc.cz/browse/DS-978)
export * from '../ButtonLink/ButtonLink';
export * from '../ButtonLink/useButtonLinkAriaProps';
export * from '../ButtonLink/useButtonLinkStyleProps';
export { default as ButtonLink } from '../ButtonLink/ButtonLink';
