// A function that checks if the given number is prime 
// and prints yes or no to the screen.

// The purpose of this task is to learn how to separate clean code from code with side effects.

// To do this, I separate the process of determining whether a number 
// is prime into a separate function that returns a boolean value. 
// This is the function by which I separate the pure code from the code 
// that interprets the boolean value (as 'yes' or 'no') and does the side effect (printing to the screen).

const isPrime = (num) => {
    if (num < 2) {
      return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i += 1) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  };
  
  export default function getMessage(num) {
    const result = isPrime(num) ? 'yes' : 'no';
    console.log(result);
  };