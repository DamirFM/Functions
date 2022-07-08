//I implement and export by default a function that returns 
// the arithmetic mean of all passed arguments. 
// If no arguments are passed to the function, then it should return null.

export default function average (...numbers) {
    const getSumOfNumbers = numbers.reduce((acc, number) => acc + number, 0);
    console.log(getSumOfNumbers);
    const length = numbers.length;
      if (numbers.length === 0) {
      return null;
    } else {
    return getSumOfNumbers/length;
    }
    }