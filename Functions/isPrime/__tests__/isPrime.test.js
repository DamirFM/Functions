/* eslint-disable no-undef */
import {isPrime} from '../isPrime.js';

test('not prime', () => {
  expect(isPrime(-3)).toBe(false);
  expect(isPrime(0)).toBe(false);
  expect(isPrime(-1)).toBe(false);
  expect(isPrime(1)).toBe(false);
  expect(isPrime(4)).toBe(false);
  expect(isPrime(21)).toBe(false);
  expect(isPrime(35)).toBe(false);
  expect(isPrime(-10)).toBe(false);
});

test('prime', () => {
  expect(isPrime(2)).toBe(true);
  
  expect(isPrime(3)).toBe(true);
  
  expect(isPrime(23)).toBe(true);
});