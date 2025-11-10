import { type ElementType } from 'react';
import { type ChildrenProps, type PositiveInteger, type StyleProps } from './shared';

/**
 * The modes of truncation.
 *
 * LINES: Truncate text to a specific number of lines.
 * WORDS: Truncate text to a specific number of words.
 * CHARACTERS: Truncate text to a specific number of characters.
 */
export const TruncateModes = {
  LINES: 'lines',
  WORDS: 'words',
  CHARACTERS: 'characters',
} as const;

export type TruncateMode = (typeof TruncateModes)[keyof typeof TruncateModes];

export interface SpiritTruncateProps<E extends ElementType> extends StyleProps, ChildrenProps {
  elementType?: E;
  /**
   * The limit for the truncation (lines, words, or characters).
   *
   * @see PositiveInteger
   */
  limit?: PositiveInteger<number>;
  /**
   * The type of truncation to apply.
   *
   * @see TruncateModes
   *
   * @default 'lines'
   */
  mode?: TruncateMode;
}
