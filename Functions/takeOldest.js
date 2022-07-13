
const users = [
    { name: 'Tirion', birthday: 'Nov 19, 1988' },
    { name: 'Sam', birthday: 'Nov 22, 1999' },
    { name: 'Rob', birthday: 'Jan 11, 1975' },
    { name: 'Sansa', birthday: 'Mar 20, 2001' },
    { name: 'Tisha', birthday: 'Feb 27, 1992' },
    { name: 'Chris', birthday: 'Dec 25, 1995' },
  ];


users.sort((a, b) => {
    if (a.birthday === b.birthday) {
      return 0;
    }
  
    return a.birthday > b.birthday ? 1 : -1;
  });
  
  
  
  console.log(users);