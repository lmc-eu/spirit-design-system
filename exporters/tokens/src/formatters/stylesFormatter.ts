import { JS_INDENTATION, SCSS_INDENTATION } from '../constants';

export const removeExtraBlankLines = (css: string): string => {
  return css.replace(/\n{3,}/g, '\n\n');
};

export const formatLinesAtEndOfTheFile = (css: string): string => {
  return css.replace(/\n{2,}$/, '\n');
};

const formattingConfig = {
  js: {
    indentation: JS_INDENTATION,
    openingBracket: '{',
    closingBracket: '}',
  },
  scss: {
    indentation: SCSS_INDENTATION,
    openingBracket: '(',
    closingBracket: ')',
  },
};

export const indentAndFormat = (css: string, hasJsOutput: boolean): string => {
  const fileType = hasJsOutput ? 'js' : 'scss';
  const { indentation, openingBracket, closingBracket } = formattingConfig[fileType];
  let indentationLevel = 0;
  let formattedCSS = '';

  const lines = css.split('\n');

  for (const line of lines) {
    // Check if both openingBracket and closeBracket are on the same line
    if (line.includes(openingBracket) && line.includes(closingBracket)) {
      formattedCSS += `${indentation.repeat(indentationLevel)}${line}\n`;
    } else if (line.includes(openingBracket)) {
      formattedCSS += `${indentation.repeat(indentationLevel)}${line}\n`;
      indentationLevel += 1;
    } else if (line.includes(closingBracket)) {
      indentationLevel -= 1;
      formattedCSS += `${indentation.repeat(indentationLevel)}${line}\n`;
    } else {
      formattedCSS += `${indentation.repeat(indentationLevel)}${line}\n`;
    }
  }

  formattedCSS = removeExtraBlankLines(formattedCSS);
  formattedCSS = formatLinesAtEndOfTheFile(formattedCSS);

  return formattedCSS;
};
