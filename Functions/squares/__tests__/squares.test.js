/* eslint-disable no-undef */

import { square, sumOfSquares, squareSumOfSquares } from '../squares';

test('square', () => {
  expect(square(10)).toBe(100);
  expect(square(20)).toBe(400);
});

test('sumOfSquares', () => {
  expect(sumOfSquares(3, 7)).toBe(58);
  expect(sumOfSquares(10, -9)).toBe(181);
});

test('squareSumOfSquares', () => {
  expect(squareSumOfSquares(0, 0)).toBe(0);
  expect(squareSumOfSquares(1, 1)).toBe(4);
  expect(squareSumOfSquares(-3, 7)).toBe(3364);
});
