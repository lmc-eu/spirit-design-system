export const formatCSS = (css: string): string => {
  let indentationLevel = 0;
  let formattedCSS = '';

  const lines = css.split('\n');

  for (const line of lines) {
    if (line.includes('(')) {
      indentationLevel += 1;
      formattedCSS += `${line}\n`;
    } else if (line.includes(')')) {
      indentationLevel -= 1;
      formattedCSS += `${'    '.repeat(indentationLevel)}${line}\n`;
    } else {
      formattedCSS += `${'    '.repeat(indentationLevel)}${line}\n`;
    }
  }

  // Remove extra blank lines
  formattedCSS = formattedCSS.replace(/\n{3,}/g, '\n\n');

  return formattedCSS;
};
