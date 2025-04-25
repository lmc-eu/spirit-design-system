import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import React from 'react';
import {
  ariaAttributesTest,
  classNamePrefixProviderTest,
  restPropsTest,
  stylePropsTest,
  validHtmlAttributesTest,
} from '@local/tests';
import { ScrollViewDirectionType, ScrollViewOverflowDecoratorsType } from '../../../types';
import ScrollView from '../ScrollView';

describe('ScrollView', () => {
  classNamePrefixProviderTest(ScrollView, 'ScrollView');

  stylePropsTest((props) => <ScrollView {...props} />);

  restPropsTest(ScrollView, 'div');

  validHtmlAttributesTest(ScrollView);

  ariaAttributesTest(ScrollView);

  it('should render children', () => {
    render(<ScrollView>Content</ScrollView>);

    expect(screen.getByText('Content')).toBeInTheDocument();
  });

  it('should have correct className', () => {
    render(<ScrollView data-testid="test">Content</ScrollView>);

    expect(screen.getByTestId('test')).toHaveClass('ScrollView');
  });

  it('should have correct direction className', () => {
    render(<ScrollView data-testid="test">Content</ScrollView>);

    expect(screen.getByTestId('test')).toHaveClass('ScrollView');
  });

  it.each([['vertical'], ['horizontal']])('should have correct direction className %s', (direction) => {
    render(
      <ScrollView direction={direction as ScrollViewDirectionType} data-testid="test">
        Content
      </ScrollView>,
    );

    expect(screen.getByTestId('test')).toHaveClass(`ScrollView ScrollView--${direction}`);
  });

  it('should have viewport element', () => {
    render(<ScrollView data-testid="test">Content</ScrollView>);

    expect(screen.getByTestId('test').firstChild).toHaveClass('ScrollView__viewport');
  });

  it('should have tabindex on viewport element', () => {
    render(<ScrollView data-testid="test">Content</ScrollView>);

    expect(screen.getByTestId('test').firstChild).toHaveAttribute('tabindex', '0');
  });

  it('should have content element', () => {
    render(<ScrollView>Content</ScrollView>);

    expect(screen.getByText('Content')).toHaveClass('ScrollView__content');
  });

  it('should have decorators element', () => {
    render(<ScrollView data-testid="test">Content</ScrollView>);

    expect(screen.getByTestId('test').lastChild).toHaveClass('ScrollView__overflowDecorators');
  });

  it('should have aria-hidden on decorators element', () => {
    render(<ScrollView data-testid="test">Content</ScrollView>);

    expect(screen.getByTestId('test').lastChild).toHaveAttribute('aria-hidden', 'true');
  });

  it.each([['borders'], ['shadows'], ['both']])('should have correct decorator class for %s', (decorator) => {
    render(
      <ScrollView overflowDecorators={decorator as ScrollViewOverflowDecoratorsType} data-testid="test">
        Content
      </ScrollView>,
    );

    const expectedClass =
      decorator === 'both'
        ? 'ScrollView__overflowDecorators--shadows ScrollView__overflowDecorators--borders'
        : `ScrollView__overflowDecorators--${decorator}`;

    expect(screen.getByTestId('test').lastChild).toHaveClass(expectedClass);
  });

  it('should have correct className when scrollbar is disabled', () => {
    render(
      <ScrollView isScrollbarDisabled data-testid="test">
        Content
      </ScrollView>,
    );

    expect(screen.getByTestId('test')).toHaveClass('ScrollView ScrollView--scrollbarDisabled');
  });
});
