//Functions
//-they help do things

//DECLARING A FUNCTION
function half(z) {
  return z / 2;
}

// CALLING USING A FUNCTION
const one = half(2);
console.log(one);
//-some may need more than one value to work(parameters, arguments) eg

function add(x, y) {
  return x + y;
}
console.log(add(2, 3));

//-some functions dont even need any values
//- functions with no return keyword returns undefined
//-js does not read code after return

//ARROW FUNCTIONS
// THEY USE THE FAR ARROW (=>) eg
const addx = (d, e) => d + e;
//is the same as
function add(d, e) {
  return d + e;
}
console.log(add(4, 5));
console.log(addx(4, 5));

//SCOPE
/*
The scope is the current context of execution in which values and expressions are "visible" or can be referenced.
-JavaScript has the following kinds of scopes:
Global scope: The default scope for all code running in script mode.
Module scope: The scope for code running in module mode.
Function scope: The scope created with a function.
*/
function exampleFunction() {
  const x = "declared inside function"; // x can only be used in exampleFunction
  console.log("Inside function");
  console.log(x);
}

console.log(x); // Causes error
/*variables declared with let and const can belong to an additional scope
Block scope:the scope created with a pair of curly braces(a block)- they can only scope let and const but not var
*/
{
  var x = 1;
}
console.log(x);
