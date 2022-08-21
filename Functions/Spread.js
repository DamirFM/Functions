// a function that converts dates into an array 
// of human-readable English strings. 
// Each of the dates is represented 
// by the array [2001, 10, 18], where the first element is the year, 
// the second is the month, and the third is the number.
//  The input function must take any number of parameters. 
// If nothing was passed to the function, it should return an empty array. 
// Export the default function

export default function convert(...dates) {
    //console.log(dates);
    if (dates.length === 0) {
      return [];
    }
    let result = [];
    for (let data of dates) {
    const item = new Date (...data);
    const converted = item.toDateString();
    result.push(converted);
    }
    return result;
  }