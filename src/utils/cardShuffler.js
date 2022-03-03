function cardShuffler(cardsToShuffle) {

  cardsToShuffle.forEach((card) => (card.index = Math.random() * 100));
  return cardsToShuffle.sort((a, b) => (a.index > b.index ? 1 : -1));
  };

export default cardShuffler;