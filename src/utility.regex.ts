export function escapeRegExp(text) {
  return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
}

/**
 * Check whether text is a variable.
 */
export function isVar(text: string): boolean {
  return /^[\t ]*?\$[\w-]+:[\w\-%"']*/.test(text);
}
/**
 * Check whether text is a *
 */
export function isStar(text: string): boolean {
  return /^[\t ]*?\*/.test(text);
}
/**
 * Check whether text is class, id or placeholder
 */
export function isClassOrId(text: string): boolean {
  return /^[\t ]*[#\.%]/.test(text);
}
/**
 * Check whether text is a property
 */
export function isProperty(text: string, empty?: boolean): boolean {
  if (empty) {
    return !/^[\t ]*[\w\-]+: *\S+/.test(text);
  }
  return /^[\t ]*[\w\-]+:/.test(text);
}
/**
 * Check whether text is a include
 */
export function isInclude(text: string): boolean {
  return /^[\t ]*@include/.test(text);
}
/**
 * Check whether text is a keyframe
 */
export function isKeyframes(text: string): boolean {
  return /^[\t ]*@keyframes/.test(text);
}
/**
 * Check whether text is a mixin
 */
export function isMixin(text: string): boolean {
  return /^[\t ]*@mixin/.test(text);
}
/**
 * Check whether text is a each
 */
export function isEach(text: string): boolean {
  return /^[\t ]*@each/.test(text);
}
/**
 * Check whether text starts with &
 */
export function isAnd(text: string): boolean {
  return /^[\t ]*&/.test(text);
}
/**
 * Check whether text is at rule
 */
export function isAtRule(text: string): boolean {
  return /^[\t ]*@/.test(text);
}
/**
 * Check whether text is bracket selector
 */
export function isBracketSelector(text: string): boolean {
  return /^[\t ]*\[[\w=\-*"' ]*\]/.test(text);
}
/**
 * checks if text last char is a number
 * @param {String} text
 * @return {CompletionItem}
 */
export function isNumber(text: string): boolean {
  const reg = /[0-9]$/;
  return reg.test(text) && !text.includes('#');
}
/**
 * Check whether text starts with an html tag.
 */
export function isHtmlTag(text: string) {
  let isTag = false;
  if (
    /^[\t ]*(a|abbr|address|area|article|aside|audio|b|base|bdi|bdo|blockquote|body|br|button|canvas|caption|cite|code|col|colgroup|data|datalist|dd|del|details|dfn|dialog|div|dl|dt|em|embed|fieldset|figure|footer|form|h1|h2|h3|h4|h5|h6|head|header|hgroup|hr|html|i|iframe|img|input|ins|kbd|keygen|label|legend|li|link|main|map|mark|menu|menuitem|meta|meter|nav|noscript|object|ol|optgroup|option|output|p|param|pre|progress|q|rb|rp|rt|rtc|ruby|s|samp|script|section|select|small|source|span|strong|style|sub|summary|sup|svg|table|tbody|td|template|textarea|tfoot|th|thead|time|title|tr|track|u|ul|var|video|wbr)((:|::|,|\.|#)[:$#{}()\w\-\[\]='",\.# ]*)?$/.test(
      text
    )
  ) {
    isTag = true;
  }
  return isTag;
}
/**
 * Check whether text starts with a self closing html tag.
 */
export function isVoidHtmlTag(text: string) {
  let isTag = false;
  if (
    /^[\t ]*(area|base|br|col|embed|hr|img|input|link|meta|param|source|track|wbr|command|keygen|menuitem)((:|::|,|\.|#)[:$#{}()\w\-\[\]='",\.# ]*)?$/.test(
      text
    )
  ) {
    isTag = true;
  }
  return isTag;
}

/**
 * Check whether text starts with ::.
 */
export function isPseudo(text: string) {
  return /^[\t ]*::?/.test(text);
}
/**
 * Check whether text starts with @if.
 */
export function isIfOrElse(text: string) {
  return /^[\t ]*@if|^ *@else/.test(text);
}
/**
 * Check whether text starts with @else.
 */
export function isElse(text: string) {
  return /^[\t ]*@else/.test(text);
}
/**
 * Check whether text starts with //R.
 */
export function isReset(text: string) {
  return /^[\t ]*\/?\/\/ *R *$/.test(text);
}
/**
 * Check whether text starts with //I.
 */
export function isIgnore(text: string) {
  return /^[\t ]*\/?\/\/ *I *$/.test(text);
}
/**
 * Check whether text starts with //S.
 */
export function isSassSpace(text: string) {
  return /^[\t ]*\/?\/\/ *S *$/.test(text);
}
/**
 *
 */
export function isPath(text: string) {
  return /^.*['"]\.?[\.\/]$/.test(text);
}
/**
 *
 */
export function isScssOrCss(text: string, wasLastLineCss: boolean = false) {
  if (wasLastLineCss && text.endsWith(',') && isClassOrId(text)) {
    return true;
  }

  // comments get handled somewhere else.
  return /[;\{\}][\t ]*(\/\/.*)?$/.test(text);
}
/**
 *
 */
export function isCssPseudo(text: string) {
  return /^[\t ]*[&.#%].*:/.test(text);
}
/**
 *
 */
export function isCssOneLiner(text: string) {
  return /^[\t ]*[&.#%][\w-]*(?!#)\{.*[;\}]$/.test(text);
}
/**
 *
 */
export function isPseudoWithParenthesis(text: string) {
  return /^[\t ]*::?[\w\-]+\(.*\)/.test(text);
}
/**
 *
 */
export function isComment(text: string) {
  return /^[\t ]*\/\/|^ *\/\*/.test(text);
}
/**
 *
 */
export function isBlockCommentStart(text: string) {
  return /^[\t ]*(\/\*)/.test(text);
}
/**
 *
 */
export function isBlockCommentEnd(text: string) {
  return /[\t ]*\*\/|(?=^[a-zA-Z0-9#.%$@\\[=*+])/.test(text);
}
/**
 *
 */
export function isMoreThanOneClassOrId(text: string) {
  return /^[\t ]*[\.#%].* ?, *[\.#%].*/.test(text);
}
/**
 *
 */
export function hasColor(text: string) {
  return /^.*#[a-fA-F\d]{3,4}\b|^.*#[a-fA-F\d]{6}\b|^.*#[a-fA-F\d]{8}\b|rgba?\([\d. ]+,[\d. ]+,[\d. ]+(,[\d. ]+)?\)/.test(text);
}
/**
 * if the Property Value Space is none or more that one, this function returns false, else true;
 */
export function hasPropertyValueSpace(text: string) {
  const split = text.split(':');
  return split[1] === undefined
    ? true
    : split[1][0] === undefined
    ? true
    : split[1].startsWith(' ')
    ? split[1][1] === undefined
      ? true
      : !split[1][1].startsWith(' ')
    : false;
}
/**
 * returns the distance between the beginning and the first char that is not the checkAgainstChar in form of a number.
 * @param checkAgainstChar defaults to `' '` should always be only one char.
 */
export function getDistance(text: string, tabSize: number): number {
  let count = 0;
  for (let i = 0; i < text.length; i++) {
    const char = text[i];
    if (char !== ' ' && char !== '\t') {
      break;
    }
    if (char === '\t') {
      count += tabSize;
    } else {
      count++;
    }
  }
  return count;
}
/**
 * returns the distance between the end and the first char that is not the checkAgainstChar in form of a number.
 * @param checkAgainstChar defaults to `' '` should always be only one char.
 */
export function getDistanceReversed(text: string, tabSize: number): number {
  let count = 0;
  for (let i = text.length - 1; i > 0; i--) {
    const char = text[i];
    if (char !== ' ' && char !== '\t') {
      break;
    }
    if (char === '\t') {
      count += tabSize;
    } else {
      count++;
    }
  }
  return count;
}
/**
 *
 */
export function splitOnce(text: string, splitter: string) {
  const split = text.split(splitter);
  const key = split.shift();
  return { body: (split.length > 0 ? splitter : '') + split.join(splitter), key };
}
