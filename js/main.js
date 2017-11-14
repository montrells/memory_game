/*console.log("Up and running!");
*/
var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];
var cardOne = [cards[0]];
var cardTwo = [cards[3]];
cardsInPlay.push(cardOne);
cardsInPlay.push(cardTwo);


if (cardsInPlay.length === 2) {
    console.log("Two cards are present!");
}if (cardsInPlay[0] === cardsInPlay[3]){
    alert("You found a match!");
}else {
    alert("Sorry, try again.");
}

console.log(cardsInPlay);


console.log("User flipped " + cardOne);
console.log("User flipped " + cardTwo);
/*
console.log("User flipped " + cardThree);
console.log("User flipped " + cardFour); */


