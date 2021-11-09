//creating the player object having players Name and players chips
let player ={
    playerName:"Abhinav",
    chips:200
};
//grabbing the player-el paragraph element and storing in a playerEl element
let playerEl = document.getElementById("player-el");

//Rendering the playerEl on the html
playerEl.textContent = player.playerName +": $" + player.chips;
let sum = 0 ;
let hasBlackJack = false;
let isAlive = false;
let firstCard ;
let secondCard ;
let cards = [];

//creating getRandomCard() function to generate random numbers using random() function that generates values between 0.000 to 0.999
function getRandomCard(){
    let randomNum =(Math.random()*13) + 1;
    randomNum = Math.floor(randomNum);
    if(randomNum > 10){
        return 10;
    }
    else if(randomNum === 1){
        return 11;
    }
    else{
        return randomNum;
    }
}
//console.log(sum);
//storing message element
let messageEl = document.getElementById("message-el");

//storing Sum element 
let sumEl = document.querySelector("#sum-el");

//storing the cards paragraph element in cards-el varriable
let cardsEl = document.getElementById("cards-el");

//creating the startGame function that calls renderGame function
function startGame(){
    isAlive = true;
    firstCard = getRandomCard();
    secondCard = getRandomCard();
    cards = [firstCard,secondCard];
    sum = firstCard + secondCard;
    renderGame();
}
function renderGame(){
   

    //rendering the cards using arrays
    cardsEl.textContent = "Cards: "
    for(let i=0;i<cards.length;i++)
    {
    cardsEl.textContent += cards[i] +" ";
    }
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
    if(isAlive ===true && hasBlackJack===false){
    //creating the new card varriable
    let card = getRandomCard();
    //pushing card to the cards array
    cards.push(card);
    sum += card;
    renderGame();
    }
}