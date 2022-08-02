const numbers = [2, 3, 11, 15, 20, 3, 5, 8, 10, 16, 2, 11, 14, 15, 18];

const average = (numbers) => {
    const sum = numbers.reduce((acc, current) => acc + current, 0);
    const length = numbers.length;
    return sum / length;
};

console.log(average);
