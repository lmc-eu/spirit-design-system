const INDENTATION = '    ';

export const removeExtraBlankLines = (css: string): string => {
  return css.replace(/\n{3,}/g, '\n\n');
};

export const formatLinesAtEndOfTheFile = (css: string): string => {
  return css.replace(/\n{2,}$/, '\n');
};

export const formatCSS = (css: string): string => {
  let indentationLevel = 0;
  let formattedCSS = '';

  const lines = css.split('\n');

  for (const line of lines) {
    // Check if both '(' and ')' are on the same line
    if (line.includes('(') && line.includes(')')) {
      formattedCSS += `${INDENTATION.repeat(indentationLevel)}${line}\n`;
    } else if (line.includes('(')) {
      formattedCSS += `${INDENTATION.repeat(indentationLevel)}${line}\n`;
      indentationLevel += 1;
    } else if (line.includes(')')) {
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
