// The function must find the smallest divisor of a given number. 
// The number passed to the function is greater than zero.

// Add. condition: the divisor must be greater than one, 
// unless the argument is one (the smallest divisor of which is also one).

// For example, the smallest divisor of 15 is 3.

const smallestDivisor = (num) => {
    if (num === 1) { //if an argument equal to one, the smallest divisor of which is also one
      return 1;
    }
// let's use iterative function(recursion)
// The func will receive two arguments 
// if counter will devide acc without residue
// we will return acc - which is our smallest divider
// else we will call this func again with switch case
// until the result of dividing will equal to zero 
// it basically increase our divider by one 
    const iter = (counter, acc) => {
      if (counter % acc === 0) {
        return acc;
      }
    
      return iter(counter , acc + 1);
    }
// we shoul call our iter func after definition of a function
// we will call it with the num, because we looking for the num
// and two because we should start divide frome two
    return iter(num, 2);
    };
    
    export default smallestDivisor;

    // Algorithm idea:

    // 1 - Try dividing the number by 2.
    // 2 - If a number is divisible without a remainder, 
    // then it is the least divisor.
    // 3 - If not, try the next divisor.
    // 4 - If nothing divides the number without a remainder, 
    // then the given number is prime, so its smallest divisor is itself (not counting 1)