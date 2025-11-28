'use client';

import { type ReactNode, useMemo } from 'react';
import { type TruncateMode, TruncateModes } from '../../types';

const ELLIPSIS = '…';

export const truncateByWords = (content: string, limit: number): string => {
  const words = content.trim().split(/\s+/);
  if (words.length <= limit) {
    return content;
  }

  return `${words.slice(0, limit).join(' ')}${ELLIPSIS}`;
};

export const truncateByCharacters = (content: string, limit: number): string => {
  if (content.length <= limit) {
    return content;
  }

  return `${content.slice(0, limit)}${ELLIPSIS}`;
};

export const truncateByLines = (content: string): string => content;

export const useTruncatedText = (content: ReactNode, mode: TruncateMode, limit?: number): ReactNode =>
  useMemo(() => {
    if (typeof content !== 'string') {
      return content;
    }

    if (!limit || limit <= 0) {
      return content;
    }

    switch (mode) {
      case TruncateModes.WORDS:
        return truncateByWords(content, limit);
      case TruncateModes.CHARACTERS:
        return truncateByCharacters(content, limit);
      case TruncateModes.LINES:
      default:
        return truncateByLines(content);
    }
  }, [content, mode, limit]);
