
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
    cardsInPlay.setAttribute('src', cards.cardImage);
    if (cardsInPlay[0] === cardsInPlay[1]) {
        alert("You found a match!"); //console to check with terminal, and alert to display in browser
    } else {
        alert("Sorry, try again.");
    }
}

var flipCard = function () { //no working out so far

    this.getAttribute('data-id').setAttribute('src',(cards.rank)); //accessing the rank specifically out of the array
    cardsInPlay.push(cards.rank);
    this.getAttribute('data-id').setAttribute('src',(cards.cardImage));//accessing the cardImage specifically out of the array
    cardsInPlay.push(cards.cardImage);
    this.getAttribute('data-id').setAttribute('src',(cards.suit);//accessing the suit specifically out of the array
    cardsInPlay.push(cards.suit);

    checkForMatch()
}
var createBoard = function () {
    for (var i = 0; i < cards.length; i++) {
        var cardElement = document.createElement('img');
        cardElement.setAttribute('src', 'images/back.png');
        cardElement.setAttribute('data-id', i);
        cardElement.addEventListener('click',flipCard);
        document.getElementById('game-board')[0].appendChild(cardElement);
    }
}


checkForMatch();
createBoard();


