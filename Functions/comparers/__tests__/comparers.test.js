/* eslint-disable no-undef */
import { greaterThan, lessThan, isEqual } from '../comparers';

test('greaterThan', () => {
  expect(greaterThan('AD', 'ad sd')).toBe(true);
  expect(greaterThan('AD', 'Ad sd')).toBe(false);
  expect(greaterThan('az', 'ad')).toBe(false);
  expect(greaterThan('ASDF', 'QWER')).toBe(false);
});

test('lessThan', () => {
  expect(lessThan('ghe df', 'dfwe r D')).toBe(true);
  expect(lessThan('az', 'ad')).toBe(false);
  expect(lessThan('ASDF', 'QWER')).toBe(false);
});

test('isEqual', () => {
  expect(isEqual('az', 'ad')).toBe(true);
  expect(isEqual('az', 'adA')).toBe(false);
  expect(isEqual('az', ' ad')).toBe(false);
});
