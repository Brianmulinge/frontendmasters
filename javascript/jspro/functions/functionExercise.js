function multiply(x, y) {
  return x * y;
}
console.log(multiply(5, 5));

function yell(z) {
  console.log(z.toUpperCase());
}
yell("hey");

function longerThan(a, b) {
  return a.length >= b.length;
}
console.log(longerThan([2, 3, 4], [7, 6, 7]));

const divide = (c, d) => c / d;

console.log(divide(6, 2));

const whisper = (e) => console.log(e.toLowerCase());

console.log(whisper("HI"));

const shorterThan = (f, g) => f.length < g.length;
console.log(shorterThan([4, 5, 6], [9, 8, 7, 3]));
