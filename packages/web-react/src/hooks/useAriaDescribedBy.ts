import { useMemo } from 'react';

export const useAriaDescribedBy = (ids: string[]) =>
  useMemo(() => (ids.length ? { 'aria-describedby': ids.join(' ') } : {}), [ids]);
