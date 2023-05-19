//MAPS AND FILTERS
//- filter allows us to filter things we dont like in an array while map makes us perform specific functions to the array
const friends = ["brian", "john", "albert", "joshua", "junior"];

const people = friends.map((n) => n);
console.log(people);
const j = friends.filter((s) => s.includes("j"));
console.log(j);
const spices = [
  {
    name: "Emma",
    nickname: "Baby",
  },
  {
    name: "Geri",
    nickname: "Ginger",
  },
  {
    name: "Mel B",
    nickname: "Scary",
  },
  {
    name: "Mel C",
    nickname: "Sporty",
  },
  {
    name: "Victoria",
    nickname: "Posh",
  },
];

const names = spices.map((x) => x.name);
console.log("new array created with only names:", names);
const endInY = spices.filter((y) => y.nickname.endsWith("y"));
console.log("the objects that end in y are:", endInY);
//SPREAD
//it lets us take all the items in an array and spread 'em around
const oldBurns = ["square", "wack"];
const newBurns = ["basic", "dusty", "sus"];
const burnBook = [...oldBurns, ...newBurns];
console.log(burnBook);
//is the same as below
const newBurnBook = oldBurns.concat(newBurns);
console.log(newBurnBook);
//.push() mutates an array while .concat() creates a new array
