//fetching data
//url - points to resources on the web
//api -provide urls that point at data we care about
//fetch()- let us use js to load datafrom APIS
let x = fetch("https://dog.ceo/api/breed/hound/list");
console.log(x);
//PROMISES
//js writes an iou for the data value id doesnt have yet aka a promise of a value
//Promises can be in three states
//pending - still waiting fot the value hang tight
//fulfilled(resolved)= finally got the value
//rejected - couldnt get any value
//Promises take time to resolve so they are asychronous
//AWAIT
//it also requires an async function
//lets us wait to a process to finish
async function getData() {
  let y = await fetch("https://dog.ceo/api/breed/hound/list").then((value) =>
    console.log(value)
  );
  //using .then() lets the program fetch the data then does what you want it to do
  //it returns a response which contains a body with the data
  //Response.json()
  //its a method for parsing the body response into an json object which needs and await so that the data can be loaded

  console.log(await y.json());
}
