// Callback functions
// https://javascript.info/function-expressions
// Let’s look at more examples of passing functions as values and using function expressions.
// We’ll write a function ask(question, yes, no) with three parameters:

// question
// Text of the question

// yes
// Function to run if the answer is “Yes”
// no
// Function to run if the answer is “No”

// The function should ask the question and, depending on the user’s answer, call yes() or no():

function ask(question, yes, no) {
  if (confirm(question)) yes();
  else no();
}

function showOk() {
  alert('You agreed.');
}

function showCancel() {
  alert('You canceled the execution.');
}

// usage: functions showOk, showCancel are passed as arguments to ask
ask('Do you agree?', showOk, showCancel);

// We can use Function Expressions to write an equivalent, shorter function:
function ask1(question, yes, no) {
  if (confirm(question)) yes();
  else no();
}

ask1(
  'Do you agree?',
  () => { alert('You agreed.'); },
  () => { alert('You canceled the execution.'); },
);
//   Here, functions are declared right inside the ask(...) call.
//   They have no name, and so are called anonymous. Such functions are not accessible outside
//   of ask (because they are not assigned to variables),
//   but that’s just what we want here.

// _______________________________________________________________________________________

// Три варианта написания функции
// The following function returns true if the parameter age is greater than 18.

// Otherwise it asks for a confirmation and returns its result.
function checkAge(age) {
  if (age > 18) {
    return true;
  }
  return confirm('Did parents allow you?');
}
checkAge();

const checkAge1 = (age) => ((age > 18) ? true : confirm('Did parents allow you?'));
checkAge1();

const checkAge2 = (age) => {
  (age > 18);
  return ((age > 18) || confirm('Did parents allow you?'));
};
checkAge2();
// _______________________________________________________________________________________

// The correct approach would be to use a Function Expression
// and assign welcome to the variable that is declared outside
// of if and has the proper visibility.

// This code works as intended:
const age = prompt('What is your age?', 18);
let welcome;
if (age < 18) {
  welcome = function () {
    alert('Hello!');
  };
} else {
  welcome = function () {
    alert('Greetings!');
  };
}
welcome();

// Or we could simplify it even further using a question mark operator ?:
const age3 = prompt('What is your age?', 18);

const welcome1 = (age3 < 18)
  ? function () { alert('Hello!'); }
  : function () { alert('Greetings!'); };

welcome1(); // ok now
// _______________________________________________________________________________________

// Arrow functions, the basics
// They took arguments from the left of =>,
// evaluated and returned the right-side expression with them.
// It’s called “arrow functions”, because it looks like this:

// let func = (arg1, arg2, argN) => expression;

// Let’s see a concrete example:

const sum = (a, b) => a + b;
sum();

// his arrow function is a shorter form of:

const sum1 = function (a, b) {
  return a + b;
};

alert(sum1(1, 2)); // 3

//  If we have only one argument, then parentheses around parameters
//  can be omitted, making that even shorter.

//  For example:

const double = (n) => n * 2;
// roughly the same as: let double = function(n) { return n * 2 }

alert(double(3)); // 6

//  Arrow functions can be used in the same way as Function Expressions.
//  For instance, to dynamically create a function:

const age2 = prompt('What is your age?', 18);

const welcome2 = (age2 < 18)
  ? () => alert('Hello!')
  : () => alert('Greetings!');

welcome2();

//  Multiline arrow functions
// The arrow functions that we’ve seen so far were very simple.
// They took arguments from the left of =>,
// evaluated and returned the right-side expression with them.

// Sometimes we need a more complex function,
// with multiple expressions and statements.
// In that case, we can enclose them in curly braces.
// The major difference is that curly braces require
// a return within them to return a value (just like a regular function does).

// Like this:

const sum2 = (a, b) => { // the curly brace opens a multiline function
  const result = a + b;
  return result; // if we use curly braces, then we need an explicit "return"
};

alert(sum2(1, 2)); // 3
// _______________________________________________________________________________________

// Replace Function Expressions with arrow functions in the code below:

function ask3(question, yes, no) {
  if (confirm(question)) yes();
  else no();
}

ask3(
  'Do you agree?',
  () => { alert('You agreed.'); },
  () => { alert('You canceled the execution.'); },
);

// solution

function ask4(question, yes, no) {
  if (confirm(question)) yes();
  else no();
}

ask4(
  'Do you agree?',
  () => alert('You agreed.'),
  () => alert('You canceled the execution.'),
);

// _______________________________________________________________________________________
// Write a function called capitalize that takes a string and returns
// that string with only the first letter capitalized.
// Make sure that it can take strings that are lowercase, UPPERCASE or BoTh.

const str = 'dfDFGBDSEVDSvdf';
function capitalize(str) {
  let result = '';
  for (let i = 1; i < str.length; i++) {
    result += str[i];
    console.log(str[i]);
  }

  return str[0].toUpperCase() + result.toLowerCase();
}
alert(capitalize(str));

// Write a function called lastLetter that takes a string
// and returns the very last letter of that string:
const sum3 = (str) => str[str.length - 1];

alert(sum3('abcd'));
// _______________________________________________________________________________________
// The desired output is a list of numbers from 1 to the number the user entered.
// But each number that is divisible by 3 will output Fizz, each number that is divisible
// by 5 will output Buzz and each number that is divisible by both 3 and 5 will output FizzBuzz.

const answer = parseInt(prompt('Please enter the number you would like to FizzBuzz up to: '));

function FizzBuzz(answer) {
  let result = 1;
  for (let i = 1; i < answer; i++) {
    result += 1;
    if (i % 3 === 0 && i % 5 === 0) {
      console.log('FizzBuzz');
    } else if (i % 3 === 0) {
      console.log('Fizz');
    } else if (i % 5 === 0) {
      console.log('Buzz');
    } else {
      console.log(i);
    }
  }
  return result;
}
console.log((FizzBuzz(answer)));
// _______________________________________________________________________________________

const select1 = document.querySelector('select');
const html = document.querySelector('html');
document.body.style.padding = '10px';

function update(bgColor, textColor) {
  html.style.backgroundColor = bgColor;
  html.style.color = textColor;
}

select1.addEventListener('change', () => (select1.value === 'black'
  ? update('black', 'white') // if true
  : update('white', 'black')), // if false
);
