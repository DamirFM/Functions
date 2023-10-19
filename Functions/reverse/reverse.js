// To solve this problem, you can move from the end of the line to its beginning
// The length of the string str is found like this: str.length
// Remember that the indices in the string start at 0,
// but the length is the actual length. 
//So the index of the last character is one less than the length of the string

function reverse(str){
    let i = str.length - 1;
    let result = '';
    while (i >= 0) {
      console.log(str[i])
      result = result + str[i];
      i = i - 1;
    }
    return result;
  }
  export default reverse;
  