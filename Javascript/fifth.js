// Functions and Methods
// general trivia -> NaN is an error which means Not A Number
function myFunction() {
  console.log("Hello This is my First Function in JS");
}

myFunction();
for (let i = 0; i < 2; i++) {
  myFunction();
}

function sum(a, b) {
  console.log(a + b);
}
sum(5, 4);

function retSum(a, b) {
  s = a + b;
  console.log("Before return");
  return s;
  console.log("After return"); //will not be executed for obvious reasons
}

console.log(retSum(4, 2));

// Arrow Functions =>

const arrowSum = (a, b) => {
  console.log(a + b);
};
arrowSum(3, 21);

const justPrint = () => console.log("Hello Print");
justPrint();

const countVowels = (str) => {
  count = 0;
  for (char of str) {
    if (
      char === "a" ||
      char === "e" ||
      char === "i" ||
      char === "o" ||
      char === "u"
    ) {
      count++;
    }
  }
  return count;
};
console.log(countVowels("hritish"));
