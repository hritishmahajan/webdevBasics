// for(let i =0; i<=100; i++){
//     if(i%2 == 0){
//         console.log(i);
//     }
// }

let gamenum = 25;

let usrNum = prompt("Guess the game number: ");
console.log(usrNum);

while(usrNum != gamenum){
   usrfNum = prompt("You entered the wrong number");
}
console.log("You entered the right number");