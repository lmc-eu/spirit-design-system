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
import { type ScrollViewDirectionType, type ScrollViewOverflowDecoratorsType } from '../../../types';
import { SCROLL_VIEW_ARROWS_LABEL_HORIZONTAL_END, SCROLL_VIEW_ARROWS_LABEL_VERTICAL_END } from '../constants';
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
    render(<ScrollView data-testid="scroll-test">Content</ScrollView>);

    expect(screen.getByTestId('scroll-test')).toHaveClass('ScrollView');
  });

  it('should have correct direction className', () => {
    render(<ScrollView data-testid="scroll-test">Content</ScrollView>);

    expect(screen.getByTestId('scroll-test')).toHaveClass('ScrollView');
  });

  it.each([['vertical'], ['horizontal']])('should have correct direction className %s', (direction) => {
    render(
      <ScrollView direction={direction as ScrollViewDirectionType} data-testid="scroll-test">
        Content
      </ScrollView>,
    );

    expect(screen.getByTestId('scroll-test')).toHaveClass(`ScrollView ScrollView--${direction}`);
  });

  it('should have viewport element', () => {
    render(<ScrollView data-testid="scroll-test">Content</ScrollView>);

    expect(screen.getByTestId('scroll-test').firstChild).toHaveClass('ScrollView__viewport');
  });

  it('should have tabindex on viewport element', () => {
    render(<ScrollView data-testid="scroll-test">Content</ScrollView>);

    expect(screen.getByTestId('scroll-test').firstChild).toHaveAttribute('tabindex', '0');
  });

  it('should have content element', () => {
    render(<ScrollView>Content</ScrollView>);

    expect(screen.getByText('Content')).toHaveClass('ScrollView__content');
  });

  it('should have decorators element', () => {
    render(<ScrollView data-testid="scroll-test">Content</ScrollView>);

    expect(screen.getByTestId('scroll-test').lastChild).toHaveClass('ScrollView__overflowDecorators');
  });

  it('should have aria-hidden on decorators element', () => {
    render(<ScrollView data-testid="scroll-test">Content</ScrollView>);

    expect(screen.getByTestId('scroll-test').lastChild).toHaveAttribute('aria-hidden', 'true');
  });

  it.each([['borders'], ['shadows'], ['both']])('should have correct decorator class for %s', (decorator) => {
    render(
      <ScrollView overflowDecorators={decorator as ScrollViewOverflowDecoratorsType} data-testid="scroll-test">
        Content
      </ScrollView>,
    );

    const expectedClass =
      decorator === 'both'
        ? 'ScrollView__overflowDecorators--shadows ScrollView__overflowDecorators--borders'
        : `ScrollView__overflowDecorators--${decorator}`;

    expect(screen.getByTestId('scroll-test').lastChild).toHaveClass(expectedClass);
  });

  it('should have correct className when scrollbar is disabled', () => {
    render(
      <ScrollView isScrollbarDisabled data-testid="scroll-test">
        Content
      </ScrollView>,
    );

    expect(screen.getByTestId('scroll-test')).toHaveClass('ScrollView ScrollView--scrollbarDisabled');
  });

  it('should render arrows when hasArrows is true', () => {
    render(
      <ScrollView hasArrows data-testid="scroll-test">
        Content
      </ScrollView>,
    );

    expect(screen.getByTestId('scroll-test').lastElementChild).toHaveClass('ScrollView__arrows');
  });

  it('should scroll by given scroll step when arrow is clicked (horizontal)', () => {
    render(
      <ScrollView hasArrows direction="horizontal" arrowsScrollStep={100} data-testid="scroll">
        <div style={{ width: '1000px' }}>Content</div>
      </ScrollView>,
    );

    const viewport = screen.getByTestId('scroll').firstElementChild;
    const rightArrow = screen.getByRole('button', { name: SCROLL_VIEW_ARROWS_LABEL_HORIZONTAL_END });

    const scrollBy = jest.fn();
    Object.defineProperty(viewport!, 'scrollBy', { value: scrollBy, writable: true });

    rightArrow?.click();

    expect(scrollBy).toHaveBeenCalledWith({ left: 100, behavior: 'smooth' });
  });

  it('should scroll by given scroll step when arrow is clicked (vertical)', () => {
    render(
      <ScrollView hasArrows arrowsScrollStep={80} data-testid="scroll">
        <div style={{ height: '1000px' }}>Content</div>
      </ScrollView>,
    );

    const viewport = screen.getByTestId('scroll').firstElementChild;
    const downArrow = screen.getByRole('button', { name: SCROLL_VIEW_ARROWS_LABEL_VERTICAL_END });

    const scrollBy = jest.fn();
    Object.defineProperty(viewport!, 'scrollBy', { value: scrollBy, writable: true });

    downArrow?.click();

    expect(scrollBy).toHaveBeenCalledWith({ top: 80, behavior: 'smooth' });
  });

  it('should not render arrows when hasArrows is false', () => {
    render(<ScrollView>Content</ScrollView>);

    expect(screen.queryAllByRole('button')).toHaveLength(0);
  });

  it('should use custom arrow labels (vertical)', () => {
    render(
      <ScrollView hasArrows ariaLabelArrows={{ top: 'Custom top label', bottom: 'Custom bottom label' }}>
        <div style={{ height: '1000px' }}>Content</div>
      </ScrollView>,
    );

    expect(screen.getByRole('button', { name: 'Custom top label' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Custom bottom label' })).toBeInTheDocument();
  });

  it('should use custom arrow labels (horizontal)', () => {
    render(
      <ScrollView
        hasArrows
        direction="horizontal"
        ariaLabelArrows={{ start: 'Custom start label', end: 'Custom end label' }}
      >
        <div style={{ width: '1000px' }}>Content</div>
      </ScrollView>,
    );

    expect(screen.getByRole('button', { name: 'Custom start label' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Custom end label' })).toBeInTheDocument();
  });
});
