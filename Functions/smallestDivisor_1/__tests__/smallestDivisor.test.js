/* eslint-disable no-undef */
import smallestDivisor from '../solution.js';

test('solution', () => {
  expect(smallestDivisor(-3)).toEqual(NaN);
  expect(smallestDivisor(0)).toEqual(NaN);
  expect(smallestDivisor(1)).toBe(1);
  expect(smallestDivisor(4)).toBe(2);
  expect(smallestDivisor(121)).toBe(11);
  expect(smallestDivisor(3)).toBe(3);
  expect(smallestDivisor(8)).toBe(2);
  expect(smallestDivisor(9)).toBe(3);
  expect(smallestDivisor(17)).toBe(17);
  expect(smallestDivisor(15)).toBe(3);
});
