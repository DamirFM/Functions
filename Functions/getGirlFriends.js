// a function that takes a list of users as input and returns a flat list of girlfriends of all users (without saving keys).
// Each user's friends are stored as an array in the friends key.
// Gender is accessed by the key gender and can take the values male or female.

export default (users) => {
  const friendsOfUsers = users.map(({ friends }) => friends);
  return friendsOfUsers.flat().filter(({ gender }) => gender === 'female');
};
