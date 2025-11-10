import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import React from 'react';
import {
  ariaAttributesTest,
  classNamePrefixProviderTest,
  elementTypePropsTest,
  restPropsTest,
  stylePropsTest,
  validHtmlAttributesTest,
} from '@local/tests';
import Truncate from '../Truncate';

describe('Truncate', () => {
  classNamePrefixProviderTest(Truncate, 'text-truncate-multiline');

  stylePropsTest(Truncate);

  restPropsTest(Truncate, 'span');

  validHtmlAttributesTest(Truncate);

  ariaAttributesTest(Truncate);

  elementTypePropsTest(Truncate, 'div');

  it('should have default classname', () => {
    render(<Truncate>Text content</Truncate>);

    expect(screen.getByText('Text content')).toHaveClass('text-truncate-multiline');
  });

  it('should have correct classname for lines mode', () => {
    render(
      <Truncate mode="lines" limit={2}>
        Text content
      </Truncate>,
    );
    const text = screen.getByText('Text content');

    expect(text).toHaveClass('text-truncate-multiline');
    expect(text).toHaveStyle('--text-truncate-lines:2;');
  });

  it('should truncate text by words', () => {
    const longText = 'This is a very long text that should be truncated by words';
    render(
      <Truncate mode="words" limit={5}>
        {longText}
      </Truncate>,
    );

    expect(screen.getByText('This is a very long…')).toBeInTheDocument();
  });

  it('should truncate text by characters', () => {
    const longText = 'This is a very long text that should be truncated by characters';
    render(
      <Truncate mode="characters" limit={20}>
        {longText}
      </Truncate>,
    );

    expect(screen.getByText('This is a very long …')).toBeInTheDocument();
  });

  it('should not truncate when limit is not reached', () => {
    const shortText = 'Short text';
    render(
      <Truncate mode="words" limit={10}>
        {shortText}
      </Truncate>,
    );

    expect(screen.getByText('Short text')).toBeInTheDocument();
  });

  it('should not truncate when limit is 0', () => {
    const text = 'This text should not be truncated';
    render(
      <Truncate mode="words" limit={0}>
        {text}
      </Truncate>,
    );

    expect(screen.getByText('This text should not be truncated')).toBeInTheDocument();
  });

  it('should not truncate when limit is negative', () => {
    const text = 'This text should not be truncated';
    render(
      <Truncate mode="words" limit={-1}>
        {text}
      </Truncate>,
    );

    expect(screen.getByText('This text should not be truncated')).toBeInTheDocument();
  });

  it('should render children', () => {
    render(<Truncate>Text content</Truncate>);

    expect(screen.getByText('Text content')).toBeInTheDocument();
  });
});
