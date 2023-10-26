// @ts-check

// The functions lessThan, greaterThan and isEqual in
// the comparers module compare two strings and return true/false.

// The comparison is based on the number of capital characters in
// the line (more capital characters - larger line).

// Special characters (such as space) have no uppercase equivalents
// and are treated as uppercase characters in this assignment.

// comparers.js

// Add the necessary parts of the bigLettersCount and
// compare functions to make the lessThan, greaterThan and isEqual functions work.

// The compare function, which takes two strings first and second,
// works according to the following algorithm:

// If the first line contains more capital characters, then 1 is returned.
// If the second line contains more capital characters, then -1 is returned.
// Otherwise 0 is returned.

// Hints
// The bigLettersCount function must take the string str as
// input and count the number of uppercase characters in it.
// Calculate the length of a string: length(str).
// Convert a string to uppercase: toUpperCase(str).
// Checking that a character is uppercase: toUpperCase(char) === char;

import { length, toUpperCase } from './strings.js';

const bigLettersCount = (str) => {
  let result = 0;
  for (let i = 0; i < length(str); i += 1) {
    if (toUpperCase(str[i]) === str[i]) {
      result += 1;
    }
  }

  return result;
};

const compare = (first, second) => {
  const firstCount = bigLettersCount(first);
  const secondCount = bigLettersCount(second);
  if (firstCount > secondCount) {
    return 1;
  }
  if (firstCount < secondCount) {
    return -1;
  }
  return 0;
};

export const greaterThan = (first, second) => (
  compare(first, second) === 1);

export const lessThan = (first, second) => (
  compare(first, second) === -1);

export const isEqual = (first, second) => (
  compare(first, second) === 0);
