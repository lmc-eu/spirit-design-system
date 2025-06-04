'use client';

import { TabContent, TabLink, TabList, Tabs } from '@lmc-eu/spirit-web-react';
import NextLink from 'next/link';
import { useSelectedLayoutSegment } from 'next/navigation';
import { use, type ReactNode } from 'react';

interface ViewsLayoutProps {
  views: ReactNode;
  params: Promise<{ component: string }>;
}

const ViewsLayout = ({ views, params }: ViewsLayoutProps) => {
  const segments = ['design', 'web', 'react', 'web-preview', 'react-preview'];
  const { component } = use(params);
  const selectedSegment = useSelectedLayoutSegment('views') || '';
  const selectedTab = segments.includes(selectedSegment) ? selectedSegment : 'guidelines';

  return (
    <Tabs selectedTab={selectedTab} toggle={() => {}}>
      <TabList>
        <TabLink elementType={NextLink} href={`/components/${component}`} forTabPane="guidelines">
          Guidelines
        </TabLink>
        <TabLink elementType={NextLink} href={`/components/${component}/design`} forTabPane="design">
          Design
        </TabLink>
        <TabLink elementType={NextLink} href={`/components/${component}/web`} forTabPane="web">
          Web
        </TabLink>
        <TabLink elementType={NextLink} href={`/components/${component}/react`} forTabPane="react">
          React
        </TabLink>
        <TabLink elementType={NextLink} href={`/components/${component}/web-preview`} forTabPane="web-preview">
          Web Preview
        </TabLink>
        <TabLink elementType={NextLink} href={`/components/${component}/react-preview`} forTabPane="react-preview">
          React Preview
        </TabLink>
      </TabList>
      <TabContent>{views}</TabContent>
    </Tabs>
  );
};

export default ViewsLayout;
