//Objects
//- they contain variables and values
const js = {
  name: "javascript",
  birthYear: 1995,
  creator: "Brendan Eich",
  isAwesome: true,
};
console.log(js.name);
console.log(js.isAwesome);
//you can get the type of a property in an object
console.log(typeof js.name);
//using startsWith
console.log(js.name.startsWith("java"), "javascript starts with the name java");
//creating a new property in an object can be done using dot(.)
const person = {
  firstName: "Brian",
};
person.lastName = "Mulinge";
console.log(person);
//you can replace the value of a property in an object
person.lastName = "Jaden";
console.log(person);

//Object Methods
//-property can point to functions(method)
const dog = {
  name: "Pitbul",
  speak: function () {
    console.log("woof woof");
  },
};
dog.speak();
//Built in Objects
//eg html (document), console
