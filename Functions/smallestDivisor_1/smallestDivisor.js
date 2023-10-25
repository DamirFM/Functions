// You must find the smallest integer divisor of a number.
// The behavior of the function is the same as in the previous lesson,
// but the implementation (function code) must be different.
// This time implement an imperative iterative process, which means:

// don't use recursion
// use variables
// use a while loop
// For example, the smallest divisor of 15 is 3.

const smallestDivisor = (num) => {
  if (num < 1) {
    return NaN;
  }
  if (num === 1) {
    return 1;
  }
  let result = 2;
  while (num % result !== 0) {
    result += 1;
  }
  return result;
};
export default smallestDivisor;
