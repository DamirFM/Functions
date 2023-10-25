// the takeLast() function, which returns the last n characters of a string in reverse order.
// The number of characters is passed to takeLast() as the second parameter.
// If an empty string or a string less than the required length is passed, the function should return null.

const run = (text) => {
  const takeLast = (str, n) => {
    if (str.length === 0 || str.length < n) {
      return null;
    }
    // let i = str.length - 1;
    let result = '';
    for (let i = str.length - 1; i >= str.length - n; i--) {
      result += str[i];
    }
    console.log(result);
    return result;
  };

  return takeLast(text, 4);
};

export default run;
