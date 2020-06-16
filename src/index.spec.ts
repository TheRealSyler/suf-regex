import {
  isClassOrId,
  isProperty,
  hasPropertyValueSpace,
  isMixin,
  isPseudo,
  isBlockCommentEnd,
  isHtmlTag,
  isInclude,
} from './index';

test('Is Class OR Id', () => {
  expect(isClassOrId('  	.desktop')).toEqual(true);
  expect(isClassOrId('.desktop')).toEqual(true);
  expect(isClassOrId('		#desktop')).toEqual(true);
  expect(isClassOrId('   %desktop')).toEqual(true);
  expect(isClassOrId('  	-desktop')).toEqual(false);
  expect(isClassOrId('   -any-prop: 213px')).toEqual(false);
  expect(isClassOrId('any-prop: 213px')).toEqual(false);
  expect(isClassOrId('=function')).toEqual(false);
});
test('Is Property', () => {
  expect(isProperty('	-any-prop: 213px')).toEqual(true);
  expect(isProperty('any-prop: 213px')).toEqual(true);
  expect(isProperty('  margin: 213px')).toEqual(true);
  expect(isProperty('  	margin: 213px')).toEqual(true);
  expect(isProperty('	  +desktop')).toEqual(false);
  expect(isProperty('=function')).toEqual(false);
});
test('Is Mixin', () => {
  expect(isMixin('	-any-prop: 213px')).toEqual(false);
  expect(isMixin('any-prop: 213px')).toEqual(false);
  expect(isMixin('  margin: 213px')).toEqual(false);
  expect(isMixin('  	margin: 213px')).toEqual(false);
  expect(isMixin('	  +desktop')).toEqual(false);
  expect(isMixin('=function')).toEqual(true);
  expect(isMixin('@mixin function')).toEqual(true);
});
test('has Property Value Space', () => {
  expect(hasPropertyValueSpace('prop: 12px')).toEqual(true);
  expect(hasPropertyValueSpace('prop:  12px')).toEqual(false);
  expect(hasPropertyValueSpace('prop:12px')).toEqual(false);
});
test('Is Pseudo', () => {
  expect(isPseudo(':root')).toEqual(true);
  expect(isPseudo('\\:root')).toEqual(true);
});
test('Is Block Comment', () => {
  expect(isBlockCommentEnd('*')).toEqual(false);
});
test('Is HtmlTag', () => {
  expect(isHtmlTag('a')).toEqual(true);
  expect(isHtmlTag('a.class#{$var}[type="awd"]')).toEqual(true);
  expect(isHtmlTag('ab')).toEqual(false);
  expect(isHtmlTag('tr:nth-child(2n+1)')).toEqual(true);
});
test('Is Include', () => {
  expect(isInclude('+a')).toEqual('header');
  expect(isInclude('@include a')).toEqual('header');
  expect(isInclude('+a()')).toEqual('prop');
  expect(isInclude('a')).toEqual(false);
});
