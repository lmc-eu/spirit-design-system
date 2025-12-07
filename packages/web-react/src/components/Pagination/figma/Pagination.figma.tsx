import figma from '@figma/code-connect';
import React from 'react';
import Pagination from '../Pagination';
import PaginationItem from '../PaginationItem';
import PaginationLink from '../PaginationLink';
import PaginationLinkNext from '../PaginationLinkNext';
import PaginationLinkPrevious from '../PaginationLinkPrevious';

figma.connect(Pagination, '<FIGMA_FILE_ID>?node-id=6630%3A6855', {
  props: {},
  variant: { 'State Example': 'First' },
  example: () => (
    <Pagination>
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
    </Pagination>
  ),
});

figma.connect(Pagination, '<FIGMA_FILE_ID>?node-id=6630%3A6855', {
  props: {},
  variant: { 'State Example': 'Second' },
  example: () => (
    <Pagination>
      <PaginationItem>
        <PaginationLinkPrevious href="#" />
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="#" isCurrent accessibilityLabel="Current Page, Page 2" pageNumber={2} />
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
    </Pagination>
  ),
});

figma.connect(Pagination, '<FIGMA_FILE_ID>?node-id=6630%3A6855', {
  props: {},
  variant: { 'State Example': 'Third' },
  example: () => (
    <Pagination>
      <PaginationItem>
        <PaginationLinkPrevious href="#" />
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="#" accessibilityLabel="Go to Page 1" pageNumber={1} />
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="#" accessibilityLabel="Go to Page 2" pageNumber={2} />
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="#" isCurrent accessibilityLabel="Current Page, Page 3" pageNumber={3} />
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
    </Pagination>
  ),
});

figma.connect(Pagination, '<FIGMA_FILE_ID>?node-id=6630%3A6855', {
  props: {},
  variant: { 'State Example': 'Middle' },
  example: () => (
    <Pagination>
      <PaginationItem>
        <PaginationLinkPrevious href="#" />
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="#" accessibilityLabel="Go to Page 5" pageNumber={5} />
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="#" accessibilityLabel="Go to Page 6" pageNumber={6} />
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="#" isCurrent accessibilityLabel="Current Page, Page 7" pageNumber={7} />
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="#" accessibilityLabel="Go to Page 8" pageNumber={8} />
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="#" accessibilityLabel="Go to Page 9" pageNumber={9} />
      </PaginationItem>
      <PaginationItem>
        <PaginationLinkNext href="#" />
      </PaginationItem>
    </Pagination>
  ),
});

figma.connect(Pagination, '<FIGMA_FILE_ID>?node-id=6630%3A6855', {
  props: {},
  variant: { 'State Example': 'Last' },
  example: () => (
    <Pagination>
      <PaginationItem>
        <PaginationLinkPrevious href="#" />
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="#" accessibilityLabel="Go to Page 98" pageNumber={98} />
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="#" accessibilityLabel="Go to Page 99" pageNumber={99} />
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="#" accessibilityLabel="Go to Page 100" pageNumber={100} />
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="#" accessibilityLabel="Go to Page 101" pageNumber={101} />
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="#" isCurrent accessibilityLabel="Current Page, Page 102" pageNumber={102} />
      </PaginationItem>
    </Pagination>
  ),
});
