//strings

let str1 = "hritish";
let str2 = 'mahajan';


// Template Literals
let specialString = `This is a tmeplate literal`;
console.log(specialString);
   
let obj = {
    item: "pen",
    price: 10
};

console.log("The cost of ", obj.item, "is", obj.price, "rupees");

// better way to write the above expression is using Template literals

let output = `The cost of ${obj.item} is ${obj.price} rupees`;
console.log(output);

// this is also called string interpolation

// escape characters have length =1 for ex \n = 1

// String Methods/Functions

console.log(str1.toUpperCase());

// str.trim() to remove whitespaces from starting and the end
let strr = "        Apna College JS          ";
console.log(strr);
console.log(strr.trim());

 
// str.slice(start,end) -> tukda of the string; remember the "end" is exclusive
let strring = "012345678";
console.log(strring.slice(0,3));
console.log(strring.slice(3));  //prints all the characters from 3 to the end

// concatenation
//method 1 
let res ="hello" + 123;
console.log(res);

//method 2 
console.log(str1.concat(str2));

// REPLACE
let str = "hello";
console.log(str.replace("h","f"));

// charAt
let str4 = "IloveJS";
console.log(str.charAt(2));

// Always remember, every string is immutable; to replace a string, use string.replace()
console.log(str4.replace("I","S"))


let p = prompt("Enter your Full Name: ");
let username = "@" + p + p.length;
console.log(username);
