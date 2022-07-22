//a function for grouping objects by a given property. 
// The function takes as arguments an array of objects and the name of the property to be grouped. 
// It should return an object where the key is the value for the given property and the value is 
// an array with data appropriate for the group.


export default function groupBy (students, properties) {
  const result = students.reduce((acc, student) => {
    if (!Object.hasOwn(acc, student[properties])) {
      acc[student[properties]] = [];
    }
    acc[student[properties]].push(student);
    return acc;
  }, {})
  return result;
}