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
    if (confirm(question)) yes()
    else no();
  }
  
  function showOk() {
    alert( "You agreed." );
  }
  
  function showCancel() {
    alert( "You canceled the execution." );
  }
  
  // usage: functions showOk, showCancel are passed as arguments to ask
  ask("Do you agree?", showOk, showCancel);

//We can use Function Expressions to write an equivalent, shorter function:
function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
  }
  
  ask(
    "Do you agree?",
    function() { alert("You agreed."); },
    function() { alert("You canceled the execution."); }
  );
//   Here, functions are declared right inside the ask(...) call. 
//   They have no name, and so are called anonymous. Such functions are not accessible outside 
//   of ask (because they are not assigned to variables), 
//   but that’s just what we want here.

//_______________________________________________________________________________________

// Три варианта написания функции 
// The following function returns true if the parameter age is greater than 18.

// Otherwise it asks for a confirmation and returns its result.
function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    return confirm('Did parents allow you?');
  }
}
function checkAge(age) {
  return (age > 18) ? true : confirm('Did parents allow you?');
}
function checkAge(age) {
  (age > 18) 
  return ( (age > 18)  || confirm('Did parents allow you?'));
}
//_______________________________________________________________________________________

// The correct approach would be to use a Function Expression 
// and assign welcome to the variable that is declared outside 
// of if and has the proper visibility.

// This code works as intended:
let age = prompt("What is your age?", 18);
let welcome;
if (age < 18) {
  welcome = function() {
    alert("Hello!");
  };
} else {

  welcome = function() {
    alert("Greetings!");
  };
}
welcome();

// Or we could simplify it even further using a question mark operator ?:
let age = prompt("What is your age?", 18);

let welcome = (age < 18) ?
  function() { alert("Hello!"); } :
  function() { alert("Greetings!"); };

welcome(); // ok now
//_______________________________________________________________________________________

// Arrow functions, the basics
// They took arguments from the left of =>, 
// evaluated and returned the right-side expression with them.
// It’s called “arrow functions”, because it looks like this:

let func = (arg1, arg2, ..., argN) => expression;

// Let’s see a concrete example:

 let sum = (a, b) => a + b;

// his arrow function is a shorter form of:

let sum = function(a, b) {
  return a + b;
};

alert( sum(1, 2) ); // 3

//  If we have only one argument, then parentheses around parameters 
//  can be omitted, making that even shorter.

//  For example:

 let double = n => n * 2;
// roughly the same as: let double = function(n) { return n * 2 }

 alert( double(3) ); // 6

//  Arrow functions can be used in the same way as Function Expressions.
//  For instance, to dynamically create a function:

 let age = prompt("What is your age?", 18);

 let welcome = (age < 18) ?
  () => alert('Hello!') :
  () => alert("Greetings!");

 welcome();

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

 let sum = (a, b) => {  // the curly brace opens a multiline function
  let result = a + b;
  return result; // if we use curly braces, then we need an explicit "return"
};

alert( sum(1, 2) ); // 3
//_______________________________________________________________________________________

// Replace Function Expressions with arrow functions in the code below:

 function ask(question, yes, no) {
  if (confirm(question)) yes();
  else no();
}

ask(
  "Do you agree?",
  function() { alert("You agreed."); },
  function() { alert("You canceled the execution."); }
);

// solution

 function ask(question, yes, no) {
  if (confirm(question)) yes();
  else no();
}

ask(
  "Do you agree?",
  () => alert("You agreed."),
  () => alert("You canceled the execution.")
);
 