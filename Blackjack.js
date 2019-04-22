let header = document.getElementById('header');
let paragraph = document.getElementById('paragraph');
let hit = document.getElementById('hit');
let stay = document.getElementById('stay');
let counter = document.getElementById('counter');
let loadPlayerHand = document.getElementById('playerhand');

let playerHand = [];
let cardCounter = 0;

let suits = ['Clubs', 'Diamonds', 'Hearts', 'Spades'];
let values = ['Ace', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Jack', 'Queen', 'King'];

function createDeck() {
  newgame.style.display = 'none';
  hit.style.display = 'block';
  stay.style.display = 'block';
  paragraph.innerText = 'Do you hit or stay?';
  deck = [];

  for(let suitIdx = 0; suitIdx < suits.length; suitIdx++) {
    for(let valueIdx = 0; valueIdx < values.length; valueIdx++) {
      let card = {
        suit: suits[suitIdx],
        value: values[valueIdx]
      };
      deck.push(card);
    }
  }
  shuffle();
  getNextCard();
  getNextCard();
  return deck;
}

function getNextCard() {
  let cardToValue = {
 'Ace': 1,
 'Two': 2,
 'Three': 3,
 'Four': 4,
 'Five': 5,
 'Six': 6,
 'Seven': 7,
 'Eight': 8,
 'Nine': 9,
 'Ten': 10,
 'Jack': 10,
 'Queen': 10,
 'King': 10
};
  let currentCardValue = deck[deck.length - 1].value;
  playerHand.push(deck[deck.length - 1].value + ' of ' + deck[deck.length - 1].suit);
  cardCounter = cardCounter + cardToValue[currentCardValue];
  deck.pop();
  counter.innerText = 'The sum of your cards is: ' + cardCounter;
  loadPlayerHand.innerText = 'Cards you have: ' + playerHand.join(', ');
  if (cardCounter > 21) {
    paragraph.innerText = 'YOU LOSE!';
    counter.style.color = 'red';
  } if (cardCounter === 21) {
    paragraph.innerText = 'YOU WIN!';
    counter.style.color = 'green';
  }
}

function shuffle() {
  for(let i = deck.length - 1; i >= 0; i--) {
    let randomIndex = Math.floor(Math.random() * (i + 1));
    let itemAtIndex = deck[randomIndex];
    deck[randomIndex] = deck[i];
    deck[i] = itemAtIndex;
  }
  return deck;
}
