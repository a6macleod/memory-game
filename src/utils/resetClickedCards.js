function resetClickedCards(cards) {
  return cards.forEach((card) => (card.clicked = false));
};

export default resetClickedCards