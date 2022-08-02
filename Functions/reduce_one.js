const numbers = [2, 3, 11, 15, 20, 3, 5, 8, 10, 16, 2, 11, 14, 15, 18];

const average = (numbers) => {
    const sum = numbers.reduce((acc, current) => acc + current, 0);
    const length = numbers.length;
    return sum / length;
};

console.log(average(numbers));

const users = [{
    username: "lando12",
    jedi: false
}, {
    username: "kvaigon99",
    jedi: true
}, {
    username: "anakin skywalker",
    jedi: false // DARK SIDE ISN'T JEDI WAY!!!
}, {
    username: "littlegreenpug",
    jedi: true
}, {
    username: "ray",
    jedi: true
}, {
    username: "padmebestqueenever",
    jedi: false
}];

const getJedi = (users) =>{
    return users.reduce((acc, user) => {
        if (user.jedi) {
            acc += 1;
        }
        return acc;
    } , 0)   
}
console.log(getJedi(users));

const getNames = (users) => {
    return users.reduce((arr, item) => {
        if (item.jedi) {
            arr.push(item[username])
        }
        return arr;
    } , [])
}

console.log(getNames(users))
