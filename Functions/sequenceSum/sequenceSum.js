// Write (using a recursive process) a function sequenceSum() 
// that finds the sum of a sequence of integers. 
// The sequence is specified by two values: 
// begin - the beginning of the sequence, 
// end - the end of the sequence. 
// For example: begin = 2 and end = 6 give us the 
// sequence 2, 3, 4, 5, 6. The sum of such a sequence 
// will be: 20.

const sequenceSum = (begin, end) => {
    if (begin > end) {
      return NaN;
    } else if (begin === end) {
      return begin;
    }
    return begin + sequenceSum(begin + 1, end)
  };
  
  export default sequenceSum;