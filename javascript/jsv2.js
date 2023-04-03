//VALUES
//number
let age = 21;

//string
let firstName  = "Brian"

//boolean
//- true or false

//null


//undefined
//- when is defined but not declared

//Non-premitive values
//array - [1,2,3]
//objects - {name:"brian"}


//OPERATORS

//Arithmetic Operators
//+ 
//-has two different behaviours
//- in strings its used in concatenation while in numbers its used for mathematical operation
let sum = 4+2
let text = "brian" + "jaden"
console.log(text)
//- - for subtraction
//* - for multiplication
// /-for division
// = - use for assignment

//Comparison Operators
// - Comparison and Logical operators are used to test for true or false.


//Logical Operators
// || - logical or
// ! - logical not

//Type Operators
//-typeof - returns a variable
//- instanceof returns true if an object is an instance of an object type
let j = typeof {
    age
}
console.log(j)

//Bitwise Operators
//- they work on 32 bit numbers e.g
//& -and
// | - or
// ~ - not

//VARIABLES
//- its a representation of a memory
let call = "John"
console.log(call) 

var s;
console.log(s)

//Arrays
var friends=["justin", "joshua","allan"]
console.log(friends[1])
console.log(friends.length)

console.log(age)
age++;
age +=2;
console.log(age)

//IF & ELSE
//-used to make decisions
if(age>50){
    console.log("Old Enough")
}else{
    console.log("Underage")
}

//LOOPS
for(i=0;i<=age;i++){
    console.log(i)
}

//Function
function yourage(){let day = new Date()
    console.log(day)
    console.log(`yo
    
    
    //Coercion
    //converting through different typesur age is ${age}`)
}

yourage(age)

function me(myName,Myage){

    console.log(`my name is ${myName} and Im ${Myage} years old`)
}
me(text,age)

//NaN
//-trying to use a string as a number
let t = 'hey'
console.log(t/2)

//new
let day = new Date()
console.log(day)


//Coercion
//converting through different types