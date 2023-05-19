//Destucturing
//-it is a fancy way of declaring multiple variables at one
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
let { name, nickname } = spices[0];
console.log(name, nickname);
//In js object properties are not numbered
//we can destructure arrays too
let [john, allan, junior, alex, brian] = [1, 2, 3, 4, 5];
console.log(brian);
//we can also use ...to collect remaining values
const [babySpice,...adultSpice] = spices
console.log(babySpice,adultSpice)