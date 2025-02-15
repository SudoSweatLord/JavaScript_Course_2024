//Fisher-Yates algorithm

const cards = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];

function shuffleDeck(deck) {
  for (let i = deck.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1)); // Pick a random index from 0 to i
    [deck[i], deck[j]] = [deck[j], deck[i]]; // Swap deck[i] with deck[j]
  }
  return deck;
}

const shuffledCards = shuffleDeck(cards);
console.log(shuffledCards);
