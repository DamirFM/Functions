let foo = (oldAcc, value) => {
    let newAcc = oldAcc + value;
    console.log(`foo(${oldAcc}, ${value}) ==> ${newAcc}`);
    return newAcc;
}

let result = [1, 2, 3, 4, 5].reduce(foo, 100);
console.log('result', result);
