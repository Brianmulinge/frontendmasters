//ARRAYS
//- it lets us keep multiple values in a collection
let names = ["brian", "joshua", "junior", "john", "albert", "kimani"];
console.log(names[4]);
names[1] = "jaden";
console.log(names);
//- pop() is used to remove the last value in an array
let lastName = names.pop();
console.log(lastName);
console.log(names);
//- push() is used to add a value in an arrays
names.push("james");
console.log(names);
//- arrays can hold different types in a single collection
let example = [6, "jackie", false];

//- sort() is used to sort things alphabetically or numerically
console.log([1, 3, 4, 2].sort());

//- join() is used to join values in an array to a single string
console.log(["lions", "tigers", "snakes"].join(" & "));

//-concat() is used to combined two arrays into one
console.log([1,2,3].concat([4,5,6]))

//Mutability
//mutable - can be changed
//immutable - data always stays the same eg strings, boolean and other primitives
//return the array afetr a new number is added in an array
let number1 = [1,2,3];
let results1 = number1.push(4)
console.log(number1)

//in the example down below concat does not add the number to the array instead it creates a new array
let number2 = [1,2,3];
let results2 = number2.concat([4])
console.log(number2)