let firstCard = 2;
let secondCard = 8;
let sum = firstCard + secondCard + 4;
let hasBlackJack = false;
let isAlive = true;
//console.log(sum);
//storing message element
let messageEl = document.getElementById("message-el");

//storing Sum element 
let sumEl = document.querySelector("#sum-el");

function startGame(){
let message = "";
sumEl.textContent = "Sum: " + sum;
if(sum <= 20)
{
    message = "Do you want to draw a new card?";
}
else if(sum === 21)
{
  message = "You have got Blackjack";
  hasBlackJack = true;
}
else
{
    message = "You're out of the game!!";
    isAlive = false;
}
messageEl.textContent = message;
}