const Brian = {
  nickName: "Brianjaden",
  home: "Kenya",
  pets: null,
  siblings: {
    secondBrother: "Junior",
    thirdBrother: "Joshua",
  },
  vehicle: "chevy cruze",
  languages: ["english", "swahili"],
  hobbies: ["coding", "travel"],
};

console.log(Brian.languages);
console.log(Brian.siblings);

//exercise_2
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
    nickName: "Scary",
  },
];
const spiceGirls = {
  albums: ["Spice", "Spiceworld", "Forever"],
  motto: "Girl Power",
  members: spices,
};
//retrieve "Girl Power"
console.log(spiceGirls.motto);
// object representing ginger spice
console.log(spiceGirls.members[1])
//"Spiceworld"
console.log(spiceGirls.albums[1]);
//mel B
console.log(spiceGirls.members[2].name)
