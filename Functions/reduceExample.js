const foo = (oldAcc, value) => {
  const newAcc = oldAcc + value;
  console.log(`foo(${oldAcc}, ${value}) ==> ${newAcc}`);
  return newAcc;
};

const result = [1, 2, 3, 4, 5].reduce(foo, 100);
console.log('result', result);
