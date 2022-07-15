export default function getChildren (users) {
    const childrenOfUsers = users.map(({ children }) => children);
   return childrenOfUsers.flat();
  
  
  
  
  }