// This function removes circle brackets from the return statement in the JSX component.
// This bug is introduced by 'recast library' which is used by 'jscodeshift' library.
// There is pull request to fix this issue: https://github.com/benjamn/recast/pull/1406, but it is not merged yet.
// @see https://github.com/facebook/jscodeshift/issues/534
// @todo Can be removed when the issue is fixed in the 'recast' library.

const REG_RETURN = /return\s+\((\s+)\(<([^\s>]+)/g;

export const removeParentheses = (string: string): string => {
  const matches: IterableIterator<RegExpMatchArray> = string.matchAll(REG_RETURN);
  let result = '';

  const allMatches = [...matches];
  if (allMatches.length === 0) return string;

  allMatches.forEach((match) => {
    const [, spaces, componentName] = match;
    const sl: number = spaces.length;

    const REG_DOUBLE_TAG = `(return\\s+\\(\\s{${sl}})\\((<${componentName}.+?\\s{${sl}}<\\/${componentName}>)\\)(\\s+\\))`;
    const REG_SELF_CLOSING = `(return\\s+\\(\\s{${sl}})\\((<${componentName}.+?\\/>)\\)(\\s+\\))`;
    const regexp = new RegExp(`${REG_DOUBLE_TAG}|${REG_SELF_CLOSING}`, 'gs');

    result = string.replace(
      regexp,
      (
        match: string, // eslint-disable-line
        doubleTagStart?: string,
        doubleTagContent?: string,
        doubleTagEnd?: string,
        selfTagStart?: string,
        selfTagContent?: string,
        selfTagEnd?: string,
      ): string => {
        if (doubleTagStart && doubleTagContent && doubleTagEnd) {
          return doubleTagStart + doubleTagContent + doubleTagEnd;
        }

        if (selfTagStart && selfTagContent && selfTagEnd) {
          return selfTagStart + selfTagContent + selfTagEnd;
        }

        return match;
      },
    );
  });

  return result;
};
