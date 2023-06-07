// Because there is no `dist` directory during the CI run
/* eslint-disable import/no-extraneous-dependencies, import/extensions, import/no-unresolved */
import React from 'react';
import ReactDOM from 'react-dom/client';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment, import/extensions, import/no-unresolved
// @ts-ignore: No declaration file
import icons from '@lmc-eu/spirit-icons/dist/icons';
import { IconsProvider } from '../../../context';
import DocsSection from '../../../../docs/DocsSections';
import PaginationCurrentFirst from '../stories/PaginationCurrentFirst';
import PaginationCurrentMiddle from '../stories/PaginationCurrentMiddle';
import PaginationCurrentLast from '../stories/PaginationCurrentLast';
import PaginationCurrentFirstCentered from '../stories/PaginationCurrentFirstCentered';
import PaginationItem from '../PaginationItem';
import PaginationLink from '../PaginationLink';
import PaginationLinkNext from '../PaginationLinkNext';
import PaginationLinkPrevious from '../PaginationLinkPrevious';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <IconsProvider value={icons}>
      <DocsSection title="Pagination Current First">
        <PaginationCurrentFirst>
          <PaginationItem>
            <PaginationLink href="#" isCurrent accessibilityLabel="Current Page, Page 1" pageNumber={1} />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#" accessibilityLabel="Go to Page 2" pageNumber={2} />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#" accessibilityLabel="Go to Page 3" pageNumber={3} />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#" accessibilityLabel="Go to Page 4" pageNumber={4} />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#" accessibilityLabel="Go to Page 5" pageNumber={5} />
          </PaginationItem>
          <PaginationItem>
            <PaginationLinkNext href="#" />
          </PaginationItem>
        </PaginationCurrentFirst>
      </DocsSection>
      <DocsSection title="Pagination Current Middle">
        <PaginationCurrentMiddle>
          <PaginationItem>
            <PaginationLinkPrevious href="#" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#" accessibilityLabel="Go to Page 11" pageNumber={11} />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#" accessibilityLabel="Go to Page 12" pageNumber={12} />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#" isCurrent accessibilityLabel="Current Page, Page 13" pageNumber={13} />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#" accessibilityLabel="Go to Page 14" pageNumber={14} />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#" accessibilityLabel="Go to Page 15" pageNumber={15} />
          </PaginationItem>
          <PaginationItem>
            <PaginationLinkNext href="#" />
          </PaginationItem>
        </PaginationCurrentMiddle>
      </DocsSection>
      <DocsSection title="Pagination Current Last">
        <PaginationCurrentLast>
          <PaginationItem>
            <PaginationLinkPrevious href="#" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#" accessibilityLabel="Go to Page 109" pageNumber={109} />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#" accessibilityLabel="Go to Page 110" pageNumber={110} />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#" accessibilityLabel="Go to Page 111" pageNumber={111} />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#" accessibilityLabel="Go to Page 112" pageNumber={112} />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#" isCurrent accessibilityLabel="Current Page, Page 113" pageNumber={113} />
          </PaginationItem>
        </PaginationCurrentLast>
      </DocsSection>
      <DocsSection title="Pagination Current First Centered">
        <PaginationCurrentFirstCentered UNSAFE_className="text-center">
          <PaginationItem>
            <PaginationLink href="#" isCurrent accessibilityLabel="Current Page, Page 1" pageNumber={1} />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#" accessibilityLabel="Go to Page 2" pageNumber={2} />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#" accessibilityLabel="Go to Page 3" pageNumber={3} />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#" accessibilityLabel="Go to Page 4" pageNumber={4} />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#" accessibilityLabel="Go to Page 5" pageNumber={5} />
          </PaginationItem>
          <PaginationItem>
            <PaginationLinkNext href="#" />
          </PaginationItem>
        </PaginationCurrentFirstCentered>
      </DocsSection>
    </IconsProvider>
  </React.StrictMode>,
);
