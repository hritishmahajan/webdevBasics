// Loops
console.log("Loops in JS");

// for-of loop -> To access the characters of a string or arrays
let str = "Hritish Mahajan"
for (let i of str) {
    console.log("i = ", i);
}

// For objects, we use for-in loop

let student ={
    name: "Hritish Mahajan",
    age: 20,
    cgpa: 8.11,
    isPass: true
};

for(let key in student){
    console.log("key =", key, "value:", student[key]);
}