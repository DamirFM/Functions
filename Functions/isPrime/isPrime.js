// Write the isPrime() function. It takes a number and
// returns true if the number is prime and false otherwise.

// A prime number is a positive integer that has exactly two
// distinct natural divisors: one and itself.
// For example, 7 is a prime number because it is divisible without
// a remainder only by 1 and itself. 2017 is another prime number.

function isPrime(n) {
// let's check the basic conditions
// if n = -3 or n = 0 or n = 1
// code will return false
  if (n <= 0 || n === 1) {
    return false;
  }
  // now let's run for loop
  // it will start from 2 because or algorithm require it
  // if we will check 4
  // 2 < 4, -> 4 % 2 === 0,   loop will return FALSE
  //
  // if we will check 21
  // 2 < 21, -> 21 % 2 !== 0, 2 + 1
  // 3 < 21, -> 21 % 3 === 0, loop will return FALSE
  //
  // if we will check 23
  // 2 < 23, -> 23 % 2 !== 0, 2 + 1
  // 3 < 23, -> 23 % 3 !== 0, 2 + 1
  // ......
  // 22 < 21, -> 23 % 22 !==0, loop can not be executed
  // code will go to next lines and return TRUE
  for (let i = 2; i < n; i++) {
    console.log(i);
    if (n % i === 0) return false;
  }
  return true;
}
export default isPrime;

//   test('not prime', () => {
//     expect(isPrime(-3)).toBe(false);
//     expect(isPrime(0)).toBe(false);
//     expect(isPrime(-1)).toBe(false);
//     expect(isPrime(1)).toBe(false);
//     expect(isPrime(4)).toBe(false);
//     expect(isPrime(21)).toBe(false);
//     expect(isPrime(35)).toBe(false);
//     expect(isPrime(-10)).toBe(false);
//   });

//   test('prime', () => {
//     expect(isPrime(2)).toBe(true);

//     expect(isPrime(3)).toBe(true);

//     expect(isPrime(23)).toBe(true);
//   });
