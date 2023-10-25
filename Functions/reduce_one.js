// number 1

const numbers = [2, 3, 11, 15, 20, 3, 5, 8, 10, 16, 2, 11, 14, 15, 18];

const average = (numbers) => {
  const sum = numbers.reduce((acc, current) => acc + current, 0);
  const { length } = numbers;
  return sum / length;
};

console.log(average(numbers));

// number 2

const users = [{
  username: 'lando12',
  jedi: false,
}, {
  username: 'kvaigon99',
  jedi: true,
}, {
  username: 'anakin skywalker',
  jedi: false, // DARK SIDE ISN'T JEDI WAY!!!
}, {
  username: 'littlegreenpug',
  jedi: true,
}, {
  username: 'ray',
  jedi: true,
}, {
  username: 'padmebestqueenever',
  jedi: false,
}];

const getJedi = (users) => users.reduce((acc, user) => {
  if (user.jedi) {
    acc += 1;
  }
  return acc;
}, 0);
console.log(getJedi(users));

/// / number 3

const getNames = (users) => users.reduce((arr, item) => {
  if (item.jedi) {
    arr.push(item.username);
  }
  return arr;
}, []);

console.log(getNames(users));

// // number 4

const getSum = (numbers) => numbers.reduce((acc, number) => acc + number, 0);

console.log(getSum(numbers));

// // number 5

const bankAccounts = [
  { id: '123', amount: 19 },
  { id: '345', amount: 33 },
  { id: '567', amount: 4 },
  { id: '789', amount: 20 },
];

const sumAmount = (bankAccounts) => bankAccounts.reduce((acc, item) => acc + item.amount, 0);

console.log(sumAmount(bankAccounts));
