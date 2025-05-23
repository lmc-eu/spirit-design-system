'use client';

import { usePathname } from 'next/navigation';

const useIsPage = (page: string) => {
  const pathname = usePathname();

  return pathname.includes(page);
};

export default useIsPage;
