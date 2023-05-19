//1
let firstName = "Brian",
  lastName = "Jaden";
if (firstName.length > lastName.length) {
  console.log(firstName, "is longer than", lastName);
} else {
  console.log(lastName, "is longer than", firstName);
}
console.log(firstName.length, lastName.length);
//2
function isEmpty(x) {
  if (x.length === 0) {
    console.log("Array is empty");
  }else{
    console.log("Array is not empty")
  }
console.log(x.length)
}
isEmpty([])
isEmpty(['2'])
isEmpty(["brian","jaden"])
//check if array is truthy or falsy
if([]){
    console.log('arrays are truthy')
}else{
    console.log('arrays are falsy')
}
