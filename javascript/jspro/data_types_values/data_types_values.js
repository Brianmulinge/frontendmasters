//Values and Data Types
//values -  are chunks of information
/* 
primitive types(numbers, strings, boolean, null , undefined)
objects(eg document)
*/

/*
//Primitive types
boolean - true and false
strings - eg "brian"
undefined - accidental nothing
null - deliberate nothing
*/

//Strings
/*
- they are made of characters
- spaces are also considered as characters

*/
//Index
/*
- characters are case sensitive
- Are numbers given to each characters in a string or arrays
- they always start with a zero(0)
eg "brian"[0] = "b"

- you can use indexOf to find the index of a specific character
eg "brian".indexOf("a") = 3

- when an character is not in a string it index is always a negative
eg "ALOHA".indexOf("Q") = -1
*/

//.includes -returns a boolean if a character is part of a string
//returns true 
"ALOHA".includes("HA") 

//.startsWith - return a boolean if a string starts with a specific character
//returns true 
"ALOHA".startsWith("AL")

//connecting two strings
console.log("ALOHA"+ "!")

//converting to lowercase
console.log("ALOHA".toLowerCase())