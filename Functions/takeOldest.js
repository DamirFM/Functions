//the takeOldest() function, which takes a list of users as input and returns the oldest ones. 
// The number of returned users is set by the second parameter, which is equal to one by default. 
// Export this function by default.

const users = [
    { name: 'Tirion', birthday: 'Nov 19, 1988' },
    { name: 'Sam', birthday: 'Nov 22, 1999' },
    { name: 'Rob', birthday: 'Jan 11, 1975' },
    { name: 'Sansa', birthday: 'Mar 20, 2001' },
    { name: 'Tisha', birthday: 'Feb 27, 1992' },
    { name: 'Chris', birthday: 'Dec 25, 1995' },
  ];


  export default function takeOldest (users, num = 1) {
    const date = (users) => Date.parse(users.birthday)
    const sorted = _.sortBy(users, date);
    return sorted.slice(0, num);
  }