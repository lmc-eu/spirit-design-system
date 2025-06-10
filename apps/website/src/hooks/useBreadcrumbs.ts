'use client';

import { COMPONENT_SEGMENTS } from '@local/lib/constants';
import { ucFirstAll } from '@local/lib/helpers';
import { usePathname } from 'next/navigation';

type Breadcrumb = {
  slug: string;
  name: string;
  url: string;
  isCurrent?: boolean;
};

const assembleBreadcrumbUrl = (pathNames: string[], index: number) => {
  return `/${pathNames.slice(0, index + 1).join('/')}`;
};

const createBreadcrumb = (slugs: string[], slug: string, index: number): Breadcrumb => {
  return {
    slug,
    name: ucFirstAll(slug),
    url: assembleBreadcrumbUrl(slugs, index),
  };
};

const useBreadcrumbs = () => {
  const pathNames = usePathname().split('/');
  // Remove the leading empty string from the split
  pathNames.shift();
  const breadcrumbPathNames = pathNames || ['components'];
  const lastBreadcrumbIndex = breadcrumbPathNames.length - 1;

  const breadcrumbs = breadcrumbPathNames.map((pathName: string, index: number) => {
    const breadcrumb = createBreadcrumb(breadcrumbPathNames, pathName, index);

    breadcrumb.isCurrent = index === lastBreadcrumbIndex;

    return breadcrumb;
  });

  const breadcroumsWithoutSegments = breadcrumbs.filter(
    (breadcrumb: Breadcrumb) => !COMPONENT_SEGMENTS.includes(breadcrumb.slug),
  );
  const currentPage = breadcroumsWithoutSegments[breadcroumsWithoutSegments.length - 1];

  return {
    breadcrumbs,
    currentPage,
  };
};

export default useBreadcrumbs;
