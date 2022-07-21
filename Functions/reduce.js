export default function groupBy (students, property) {
    const acc = {};
    for (const student of students) {
     
      if (!Object.hasOwn(acc, student[property])) {
        console.log(acc)
        acc[student[property]] = [];
      }
      acc[student[property]].push(student);
    }
    return acc;
  } 