//Conditionals
//- if statements let us execute code under a certain condition
//-else can also be used if a condition is false
let x = 10,
  y = 5;

if (x > y) {
  console.log(x, "is greater than", y);
} else {
  console.log(y, "is greater than", x);
}
//we can also chain multiple conditions using else and if blocks
//arrays are always truthy because we can oush things into them but strings are not
//FOR LOOPS
// they require you to declare/initialize a loop, give a condition for the loop then describe how to change the loop eg
for (counter = 0; counter < 10; counter++) {
  console.log(counter);
}

//FOR...OF loops
//-its a new way of writing loops
//can also be used in strings
const numbers = [1, 2, 3];

for (let n of numbers) {
  console.log(n);
}
//while loops
//let su run a chunk of code over and over uf a (condition) is true
let fiveRandomNumbers = [];
while (fiveRandomNumbers.length < 5) {
  fiveRandomNumbers.push(Math.random());
}
console.log("the numbers are", fiveRandomNumbers);

//setTimeout( Asynchronously )
//javascript cannot do multiple things at the same time
console.log("this comes first")
setTimeout(()=>console.log("this comes third"),10000)
console.log("this comes second")