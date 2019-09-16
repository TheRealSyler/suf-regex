export declare function escapeRegExp(text: any): any;
/**
 * Check whether text is a variable.
 */
export declare function isVar(text: string): boolean;
/**
 * Check whether text is a *
 */
export declare function isStar(text: string): boolean;
/**
 * Check whether text is class, id or placeholder
 */
export declare function isClassOrId(text: string): boolean;
/**
 * Check whether text is a property
 */
export declare function isProperty(text: string, empty?: boolean): boolean;
/**
 * Check whether text is a include
 */
export declare function isInclude(text: string): boolean;
/**
 * Check whether text is a keyframe
 */
export declare function isKeyframes(text: string): boolean;
/**
 * Check whether text is a mixin
 */
export declare function isMixin(text: string): boolean;
/**
 * Check whether text is a each
 */
export declare function isEach(text: string): boolean;
/**
 * Check whether text starts with &
 */
export declare function isAnd(text: string): boolean;
/**
 * Check whether text is at rule
 */
export declare function isAtRule(text: string): boolean;
/**
 * Check whether text is bracket selector
 */
export declare function isBracketSelector(text: string): boolean;
/**
 * checks if text last char is a number
 * @param {String} text
 * @return {CompletionItem}
 */
export declare function isNumber(text: string): boolean;
/**
 * Check whether text starts with an html tag.
 */
export declare function isHtmlTag(text: string): boolean;
/**
 * Check whether text starts with a self closing html tag.
 */
export declare function isVoidHtmlTag(text: string): boolean;
/**
 * Check whether text starts with ::.
 */
export declare function isPseudo(text: string): boolean;
/**
 * Check whether text starts with @if.
 */
export declare function isIfOrElse(text: string): boolean;
/**
 * Check whether text starts with @else.
 */
export declare function isElse(text: string): boolean;
/**
 * Check whether text starts with //R.
 */
export declare function isReset(text: string): boolean;
/**
 * Check whether text starts with //I.
 */
export declare function isIgnore(text: string): boolean;
/**
 * Check whether text starts with //S.
 */
export declare function isSassSpace(text: string): boolean;
/**
 *
 */
export declare function isPath(text: string): boolean;
/**
 *
 */
export declare function isScssOrCss(text: string, wasLastLineCss?: boolean): boolean;
/**
 *
 */
export declare function isCssPseudo(text: string): boolean;
/**
 *
 */
export declare function isCssOneLiner(text: string): boolean;
/**
 *
 */
export declare function isPseudoWithParenthesis(text: string): boolean;
/**
 *
 */
export declare function isComment(text: string): boolean;
/**
 *
 */
export declare function isBlockCommentStart(text: string): boolean;
/**
 *
 */
export declare function isBlockCommentEnd(text: string): boolean;
/**
 *
 */
export declare function isMoreThanOneClassOrId(text: string): boolean;
/**
 *
 */
export declare function hasColor(text: string): boolean;
/**
 * if the Property Value Space is none or more that one, this function returns false, else true;
 */
export declare function hasPropertyValueSpace(text: string): boolean;
/**
 * returns the distance between the beginning and the first char that is not the checkAgainstChar in form of a number.
 * @param checkAgainstChar defaults to `' '` should always be only one char.
 */
export declare function getDistance(text: string, tabSize: number): number;
/**
 * returns the distance between the end and the first char that is not the checkAgainstChar in form of a number.
 * @param checkAgainstChar defaults to `' '` should always be only one char.
 */
export declare function getDistanceReversed(text: string, tabSize: number): number;
/**
 *
 */
export declare function splitOnce(text: string, splitter: string): {
    body: string;
    key: string;
};
