
var cards = [
    {
        rank: "queen",
        suit: "hearts",
        cardImage: "images/queen-of-hearts.png"
    },

    {
        rank: "queen",
        suit: "diamonds",
        cardImage: "images/queen-of-diamonds.png"
    },

    {
        rank: "king",
        suit: "hearts",
        cardImage: "images/king-of-hearts.png"
    },

    {
        rank: "king",
        suit: "diamonds",
        cardImage: "images/king-of-diamonds.png"
    }
    ];
var cardsInPlay = [];
var checkForMatch = function () {

    if (cardsInPlay[0] === cardsInPlay[2]) {
        alert("You found a match!"); //console to check with terminal, and alert to display in browser
    } else {
        alert("Sorry, try again.");
    }
}

var flipCard = function (cardId) {

    console.log("User flipped "+ cards[cardId].rank); //accessing the rank specifically out of the array
    cardsInPlay.push(cards[cardId].rank);
    console.log(cards[cardId].cardImage); //accessing the cardImage specifically out of the array
    cardsInPlay.push(cards[cardId].cardImage);
    console.log(cards[cardId].suit); //accessing the suit specifically out of the array
    cardsInPlay.push(cards[cardId].suit);
    checkForMatch()
}


checkForMatch()
flipCard(0);
flipCard(2);




