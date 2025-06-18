// Arrays in JS -> mutable
// In JS, array is a special type of an object;
let arr = [32,12,23,42];
console.log(arr);
console.log(arr.length);
// Always remember, length is property in JS and not a METHOD

let heroes = ["ironman", "thor","hulk", "shaktiman", "spiderman", "antman"];
console.log(heroes);
for(let i = 0; i<heroes.length;i++){
    console.log(heroes[i]);
}

for(let hero of heroes){
    console.log(hero);
}

let marks = [85, 97, 44, 37, 76, 60];
let sum = 0;
for(let i = 0; i<marks.length;i++){
    sum = sum+marks[i];
}
let avg = sum/marks.length;
console.log(avg);

let prices = [250, 645, 300, 900, 50];
for(let i =0; i<prices.length; i++){
    prices[i] = prices[i] - prices[i]*0.1;
}
console.log(prices);


// Array Methods
// push-> add to end 
// pop ->delete from end and return 

let food =["potato", "apple", "litchi","tomato"];
console.log(food);
food.push("Mota");
console.log(food);
let deletedItem = food.pop();
console.log(food);
console.log(deletedItem);

// toString -> to convert an array to a string; original array remains intact 
console.log(food);
console.log(food.toString());

// conCat() -> join multiple arrays and return itself; doesn't make changes to the original array 
// unshift() -> similar to push, adds to the start
// shift() -> delete from the start and return

// Slice(start, end) NO CHANGE IN THE ORIGINAL ARR

console.log('Slice()');
console.log(heroes);
console.log(heroes.slice(0,3)); //the last is exclusive therefore only the 0,1 and 2nd element will be printed

console.log('Splice()');
// Splice() -> change original array
// Splice(add,remove,replace)
// Splice(starting_inx, delete_count, new_element)
console.log("heroes before splice", heroes);
heroes.splice(0,2); //means delete 2 elements after 0 which is 0 and 1
console.log("heroes after splice", heroes);

console.log("heroes before splice", heroes);
heroes.splice(2,1,101,102);
// the above line means DELETE 1 element from 2 and then add 101 and 102 after two
console.log("heroes after splice", heroes);

heroes.splice(2); //this means delete all the elements after index 2 including index 2
console.log(heroes);



