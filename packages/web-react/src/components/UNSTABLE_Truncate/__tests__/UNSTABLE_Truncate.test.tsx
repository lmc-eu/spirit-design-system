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
import UNSTABLE_Truncate from '../UNSTABLE_Truncate';

describe('UNSTABLE_Truncate', () => {
  classNamePrefixProviderTest(UNSTABLE_Truncate, 'text-truncate-multiline');

  stylePropsTest(UNSTABLE_Truncate);

  restPropsTest(UNSTABLE_Truncate, 'span');

  validHtmlAttributesTest(UNSTABLE_Truncate);

  ariaAttributesTest(UNSTABLE_Truncate);

  elementTypePropsTest(UNSTABLE_Truncate, 'div');

  it('should have default classname', () => {
    render(<UNSTABLE_Truncate>Text content</UNSTABLE_Truncate>);

    expect(screen.getByText('Text content')).toHaveClass('text-truncate-multiline');
  });

  it('should have correct classname for lines mode', () => {
    render(
      <UNSTABLE_Truncate mode="lines" limit={2}>
        Text content
      </UNSTABLE_Truncate>,
    );
    const text = screen.getByText('Text content');

    expect(text).toHaveClass('text-truncate-multiline');
    expect(text).toHaveStyle('--text-truncate-lines:2;');
  });

  it('should truncate text by words', () => {
    const longText = 'This is a very long text that should be truncated by words';
    render(
      <UNSTABLE_Truncate mode="words" limit={5}>
        {longText}
      </UNSTABLE_Truncate>,
    );

    expect(screen.getByText('This is a very long…')).toBeInTheDocument();
  });

  it('should truncate text by characters', () => {
    const longText = 'This is a very long text that should be truncated by characters';
    render(
      <UNSTABLE_Truncate mode="characters" limit={20}>
        {longText}
      </UNSTABLE_Truncate>,
    );

    expect(screen.getByText('This is a very long …')).toBeInTheDocument();
  });

  it('should not truncate when limit is not reached', () => {
    const shortText = 'Short text';
    render(
      <UNSTABLE_Truncate mode="words" limit={10}>
        {shortText}
      </UNSTABLE_Truncate>,
    );

    expect(screen.getByText('Short text')).toBeInTheDocument();
  });

  it('should not truncate when limit is 0', () => {
    const text = 'This text should not be truncated';
    render(
      <UNSTABLE_Truncate mode="words" limit={0}>
        {text}
      </UNSTABLE_Truncate>,
    );

    expect(screen.getByText('This text should not be truncated')).toBeInTheDocument();
  });

  it('should not truncate when limit is negative', () => {
    const text = 'This text should not be truncated';
    render(
      <UNSTABLE_Truncate mode="words" limit={-1}>
        {text}
      </UNSTABLE_Truncate>,
    );

    expect(screen.getByText('This text should not be truncated')).toBeInTheDocument();
  });

  it('should support deprecated lines prop for backward compatibility', () => {
    render(<UNSTABLE_Truncate lines={2}>Text content</UNSTABLE_Truncate>);
    const text = screen.getByText('Text content');

    expect(text).toHaveClass('text-truncate-multiline');
    expect(text).toHaveStyle('--text-truncate-lines:2;');
  });

  it('should prioritize lines prop over mode when both are provided', () => {
    render(
      <UNSTABLE_Truncate mode="words" lines={3} limit={5}>
        Text content
      </UNSTABLE_Truncate>,
    );
    const text = screen.getByText('Text content');

    expect(text).toHaveClass('text-truncate-multiline');
    expect(text).toHaveStyle('--text-truncate-lines:3;');
  });

  it('should render children', () => {
    render(<UNSTABLE_Truncate>Text content</UNSTABLE_Truncate>);

    expect(screen.getByText('Text content')).toBeInTheDocument();
  });
});
