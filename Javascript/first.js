console.log("Hi Shivam! Mahajan Here");
console.log("Hi I am TM Apaar Mehta")
// dynamically typed language; you don't need to specify if the variable is int or string

let a = 5;
let b = 2;
console.log("a+b=" , a+b);

// exponential operations-> **
console.log("a^b= ", a**b);

// Interesting Case, while comparing two vars, if one of them is string, it returns TRUE; for ex..
let x = 15;
let y = "15"
console.log("x==y", x==y);
// == checks only the value and not the data type but in case of === or !==, it checks the datatype also;

console.log("x===y ",x===y);


// Ternary operators -> a?b:c 
// this means if condition on a is TRUE, then execute b else c;

let age = 12;

age >=18 ? console.log("Can Vote") : console.log("can't vote");

let num  = prompt("Enter a number");
if(num%5 == 0){
    console.log("Multiple of 5");
}
else{
    console.log("Not a Multiple of 5");
}
 