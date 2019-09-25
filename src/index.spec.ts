import { isClassOrId, isProperty, hasPropertyValueSpace } from './utility.regex';

test('Is Class OR Id', () => {
  expect(isClassOrId('	  +desktop')).toEqual(true);
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
test('has Property Value Space', () => {
  expect(hasPropertyValueSpace('prop: 12px')).toEqual(true);
  expect(hasPropertyValueSpace('prop:  12px')).toEqual(false);
  expect(hasPropertyValueSpace('prop:12px')).toEqual(false);
});
