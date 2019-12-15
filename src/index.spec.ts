import { isClassOrId, isProperty, hasPropertyValueSpace, isMixin, isPseudo, isBlockCommentEnd } from './utility.regex';

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
test('Is Pseudo', () => {
  expect(isBlockCommentEnd('*')).toEqual(false);
});
