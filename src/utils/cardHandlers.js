const cardHandlers = {

  shuffleCards: (cards) => {
    cards.forEach((card) => (card.index = Math.random() * 100));
    return cards.sort((a, b) => (a.index > b.index ? 1 : -1));
  },

  resetClickedCards: (cards) => {
    return cards.forEach((card) => (card.clicked = false));
  }
}

export default cardHandlers;