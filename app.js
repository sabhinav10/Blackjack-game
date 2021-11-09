let firstCard = 2;
let secondCard = 8;
let sum = firstCard + secondCard + 4;
let hasBlackJack = false;
let isAlive = true;
//console.log(sum);
function startGame(){
let message = "";
if(sum <= 20){
    message = "Do you want to draw a new card? 😃";
}
else if(sum === 21){
  message = "Wohoo!!! You have got Blackjack 🎉🎉";
  hasBlackJack = true;
}
else{
    message = "You're out of the game! 😥😥😥";
    isAlive = false;
}
console.log(message);
}