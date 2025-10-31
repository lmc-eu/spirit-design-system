import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import React, { createRef } from 'react';
import {
  ariaAttributesTest,
  classNamePrefixProviderTest,
  restPropsTest,
  stylePropsTest,
  validHtmlAttributesTest,
} from '@local/tests';
import { Direction } from '../../../constants';
import {
  SCROLL_VIEW_ARROWS_LABEL_HORIZONTAL_END,
  SCROLL_VIEW_ARROWS_LABEL_HORIZONTAL_START,
  SCROLL_VIEW_ARROWS_LABEL_VERTICAL_END,
  SCROLL_VIEW_ARROWS_LABEL_VERTICAL_START,
} from '../constants';
import ScrollViewArrows from '../ScrollViewArrows';

describe('ScrollViewArrows', () => {
  classNamePrefixProviderTest(ScrollViewArrows, 'ScrollView__arrows');

  stylePropsTest((props) => <ScrollViewArrows {...props} />);

  restPropsTest(ScrollViewArrows, 'div');

  validHtmlAttributesTest(ScrollViewArrows);

  ariaAttributesTest(ScrollViewArrows);

  it('should render horizontal arrows with correct icons and labels', () => {
    const viewportRef = createRef<HTMLDivElement>();

    render(<ScrollViewArrows direction={Direction.HORIZONTAL} scrollStep={100} viewportRef={viewportRef} />);

    expect(screen.getByRole('button', { name: SCROLL_VIEW_ARROWS_LABEL_HORIZONTAL_START })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: SCROLL_VIEW_ARROWS_LABEL_HORIZONTAL_END })).toBeInTheDocument();
  });

  it('should render vertical arrows with correct icons and labels', () => {
    const viewportRef = createRef<HTMLDivElement>();

    render(<ScrollViewArrows direction={Direction.VERTICAL} scrollStep={80} viewportRef={viewportRef} />);

    expect(screen.getByRole('button', { name: SCROLL_VIEW_ARROWS_LABEL_VERTICAL_START })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: SCROLL_VIEW_ARROWS_LABEL_VERTICAL_END })).toBeInTheDocument();
  });

  it('should call scrollBy with correct values for horizontal arrows', () => {
    const viewportRef = { current: { scrollBy: jest.fn() } } as unknown as React.RefObject<HTMLDivElement>;

    render(<ScrollViewArrows direction={Direction.HORIZONTAL} scrollStep={50} viewportRef={viewportRef} />);

    fireEvent.click(screen.getByLabelText(SCROLL_VIEW_ARROWS_LABEL_HORIZONTAL_END));

    expect(viewportRef?.current?.scrollBy).toHaveBeenCalledWith({ left: 50, behavior: 'smooth' });

    fireEvent.click(screen.getByLabelText(SCROLL_VIEW_ARROWS_LABEL_HORIZONTAL_START));

    expect(viewportRef?.current?.scrollBy).toHaveBeenCalledWith({ left: -50, behavior: 'smooth' });
  });

  it('should call scrollBy with correct values for vertical arrows', () => {
    const viewportRef = { current: { scrollBy: jest.fn() } } as unknown as React.RefObject<HTMLDivElement>;

    render(<ScrollViewArrows direction={Direction.VERTICAL} scrollStep={40} viewportRef={viewportRef} />);

    fireEvent.click(screen.getByLabelText(SCROLL_VIEW_ARROWS_LABEL_VERTICAL_END));
    expect(viewportRef?.current?.scrollBy).toHaveBeenCalledWith({ top: 40, behavior: 'smooth' });

    fireEvent.click(screen.getByLabelText(SCROLL_VIEW_ARROWS_LABEL_VERTICAL_START));
    expect(viewportRef?.current?.scrollBy).toHaveBeenCalledWith({ top: -40, behavior: 'smooth' });
  });

  it('should have correct class', () => {
    const viewportRef = createRef<HTMLDivElement>();

    render(
      <ScrollViewArrows
        direction={Direction.HORIZONTAL}
        scrollStep={100}
        viewportRef={viewportRef}
        data-testid="arrows-test"
      />,
    );

    expect(screen.getByTestId('arrows-test')).toHaveClass('ScrollView__arrows');
  });

  describe('arrow labels', () => {
    it('should render arrows with custom horizontal labels from ariaLabelArrows prop', () => {
      const viewportRef = createRef<HTMLDivElement>();

      render(
        <ScrollViewArrows
          direction={Direction.HORIZONTAL}
          scrollStep={100}
          viewportRef={viewportRef}
          ariaLabelArrows={{ start: 'Custom Left', end: 'Custom Right' }}
        />,
      );

      expect(screen.getByRole('button', { name: 'Custom Left' })).toBeInTheDocument();
      expect(screen.getByRole('button', { name: 'Custom Right' })).toBeInTheDocument();
    });

    it('should render arrows with custom vertical labels from ariaLabelArrows prop', () => {
      const viewportRef = createRef<HTMLDivElement>();

      render(
        <ScrollViewArrows
          direction={Direction.VERTICAL}
          scrollStep={100}
          viewportRef={viewportRef}
          ariaLabelArrows={{ top: 'Custom Up', bottom: 'Custom Down' }}
        />,
      );

      expect(screen.getByRole('button', { name: 'Custom Up' })).toBeInTheDocument();
      expect(screen.getByRole('button', { name: 'Custom Down' })).toBeInTheDocument();
    });
  });
});
