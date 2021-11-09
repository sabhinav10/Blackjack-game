let firstCard = 2;
let secondCard = 8;
let sum = firstCard + secondCard ;
let hasBlackJack = false;
let isAlive = true;
//console.log(sum);
//storing message element
let messageEl = document.getElementById("message-el");

//storing Sum element 
let sumEl = document.querySelector("#sum-el");

//storing the cards paragraph element in cards-el varriable
let cardsEl = document.getElementById("cards-el");

function startGame(){
cardsEl.textContent = "Cards: " + firstCard +" " + secondCard;
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
//new card function for getting new card
function newCard(){
    console.log("new card");
    //creating the new card varriable
    let card = 7;
    sum += card;
    startGame();
}