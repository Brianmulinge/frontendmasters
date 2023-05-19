//Async functions
//-await is only allowed in async functions when an async is used
async function getData() {
  let y = await fetch("https://dog.ceo/api/breed/hound/list");
  //it returns a response which contains a body with the data
  //Response.json()
  //its a method for parsing the body response into an json object which needs and await so that the data can be loaded

  console.log(await y.json());
}
