const IDENTATION = '    ';

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
    if (line.includes('(')) {
      formattedCSS += `${IDENTATION.repeat(indentationLevel)}${line}\n`;
      indentationLevel += 1;
    } else if (line.includes(')')) {
      indentationLevel -= 1;
      formattedCSS += `${IDENTATION.repeat(indentationLevel)}${line}\n`;
    } else {
      formattedCSS += `${IDENTATION.repeat(indentationLevel)}${line}\n`;
    }
  }

  formattedCSS = removeExtraBlankLines(formattedCSS);
  formattedCSS = formatLinesAtEndOfTheFile(formattedCSS);

  return formattedCSS;
};
