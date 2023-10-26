import { length } from './strings.js';

const getNum = (num) => {
  if (num === 0) {
    return 0;
  } if (num < 10) {
    return num;
  }
  const toString = String(num);
  let result = 0;

  for (let i = 0; i < length(toString); i++) {
    result += Number(toString[i]);
  }
  console.log(result);

  return getNum(result);
};

export default getNum;

//___________________________________________________________

// BEGIN
const sumDigits = (num) => {
    const str = String(num);
    let result = 0;
    for (let i = 0; i < length(str); i += 1) {
      result += Number(str[i]);
    }
  
    return result;
  };
  
  const addDigits = (num) => {
    let result = num;
    while (result >= 10) {
      result = sumDigits(result);
    }
  
    return result;
  };
  
  export default addDigits;
  // END