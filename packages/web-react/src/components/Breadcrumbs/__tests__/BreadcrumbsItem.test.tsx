import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import React from 'react';
import { classNamePrefixProviderTest } from '../../../../tests/providerTests/classNamePrefixProviderTest';
import { restPropsTest } from '../../../../tests/providerTests/restPropsTest';
import { stylePropsTest } from '../../../../tests/providerTests/stylePropsTest';
import BreadcrumbsItem from '../BreadcrumbsItem';

describe('BreadcrumbsItem', () => {
  classNamePrefixProviderTest(BreadcrumbsItem, 'd-none');
  classNamePrefixProviderTest(BreadcrumbsItem, 'd-tablet-flex');

  stylePropsTest(BreadcrumbsItem);

  restPropsTest(BreadcrumbsItem, 'li');

  describe('BreadcrumbsItem with go back title', () => {
    const BreadcrumbsItemGoBack = () => (
      <BreadcrumbsItem href="/test" isGoBackOnly>
        test_title
      </BreadcrumbsItem>
    );

    const dom = render(<BreadcrumbsItemGoBack />);
    const listElement = dom.container.querySelector('li') as HTMLLIElement;
    const linkElement = listElement.querySelector('a') as HTMLAnchorElement;

    it('should render BreadcrumbsItem with go back title', () => {
      expect(linkElement).toHaveTextContent('test_title');
    });

    it('should have primary underlined link', () => {
      expect(linkElement).toHaveClass('link-primary link-underlined');
    });

    it('should have icon on start', () => {
      const firstElement = listElement.firstChild as SVGElement;

      expect(firstElement.tagName).toBe('svg');
    });

    classNamePrefixProviderTest(BreadcrumbsItemGoBack, 'd-tablet-none');
  });

  describe('BreadcrumbsItem is current', () => {
    const BreadcrumbsItemCurrent = () => (
      <BreadcrumbsItem href="/test" isCurrent>
        test_title
      </BreadcrumbsItem>
    );
    const dom = render(<BreadcrumbsItemCurrent />);
    const listElement = dom.container.querySelector('li') as HTMLLIElement;
    const linkElement = listElement.querySelector('a') as HTMLAnchorElement;

    it('should have secondary color', () => {
      expect(linkElement).toHaveClass('link-secondary');
    });

    it('should not be underlined', () => {
      expect(linkElement).not.toHaveClass('text-underlined');
    });

    it('should have aria-current set to page', () => {
      expect(linkElement).toHaveAttribute('aria-current', 'page');
    });

    it('should not have icon on end', () => {
      const lastElement = listElement.lastChild as SVGElement;

      expect(lastElement.tagName).not.toBe('svg');
    });
  });
});
