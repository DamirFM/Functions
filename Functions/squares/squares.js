// Implement a function square() that returns the square of a number.
// Implement a function sumOfSquares() that returns the sum of the squares of two numbers.
// Implement a function squareSumOfSquares() that returns the square of the sum of the squares of two numbers.

// square(5); // 25
// square(10); // 100
// sumOfSquares(5, 10); // 125
// sumOfSquares(10, -9); // 181
// squareSumOfSquares(1, 1); // 4
// squareSumOfSquares(2, 3); // 169


// The square() function can be used inside sumOfSquares()
// The sumOfSquares() function can be used inside squareSumOfSquares()


let square = (num) => num * num;
let sumOfSquares = (num1, num2) => square(num1) + square(num2);
let squareSumOfSquares = (num1, num2) => square(sumOfSquares(num1, num2))

export {
  square,
  sumOfSquares,
  squareSumOfSquares,
};