// a function that takes a list of users as input and returns a flat list of their children. 
// The children of each user are stored as an array in the children key.

export default function getChildren (users) {
 const childrenNames = users.map(({children}) => children);
 return childrenNames.flat();
  
  }