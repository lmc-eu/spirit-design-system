export const SCSS_INDENTATION = '    ';
export const JS_INDENTATION = '  ';

export const removeExtraBlankLines = (css: string): string => {
  return css.replace(/\n{3,}/g, '\n\n');
};

export const formatLinesAtEndOfTheFile = (css: string): string => {
  return css.replace(/\n{2,}$/, '\n');
};

export const indentAndFormat = (css: string, hasJsOutput: boolean): string => {
  const INDENTATION = hasJsOutput ? JS_INDENTATION : SCSS_INDENTATION;
  let indentationLevel = 0;
  let formattedCSS = '';

  const lines = css.split('\n');
  const openBracket = hasJsOutput ? '{' : '(';
  const closeBracket = hasJsOutput ? '}' : ')';

  for (const line of lines) {
    // Check if both openBracket and closeBracket are on the same line
    if (line.includes(openBracket) && line.includes(closeBracket)) {
      formattedCSS += `${INDENTATION.repeat(indentationLevel)}${line}\n`;
    } else if (line.includes(openBracket)) {
      formattedCSS += `${INDENTATION.repeat(indentationLevel)}${line}\n`;
      indentationLevel += 1;
    } else if (line.includes(closeBracket)) {
      indentationLevel -= 1;
      formattedCSS += `${INDENTATION.repeat(indentationLevel)}${line}\n`;
    } else {
      formattedCSS += `${INDENTATION.repeat(indentationLevel)}${line}\n`;
    }
  }

  formattedCSS = removeExtraBlankLines(formattedCSS);
  formattedCSS = formatLinesAtEndOfTheFile(formattedCSS);

  return formattedCSS;
};
