function PlayArea({deck, updateDeck, cardsInPlay, updateCardsInPlay}) {

  const [selectedCards, updateSelectedCards] = React.useState([]); 

  function selectCard(card){
    if (selectedCards.length < 2){
      let selected = [];
      // ... -> 'spread operator'
      selected = [...selectedCards, card];
      updateSelectedCards(selected);

      console.log('selectedCards', selectedCards)

      if (selected.length == 2){
        
        if(selected[0].word == selected[1].word)
          console.log('Found match', selected[0].word)
          setTimeout(() => removeValidPair(selected), 1000);
        } else {
          setTimeout(() => updateSelectedCards([]), 1000);
        } 
    }
  }

  function removeValidPair(pairOfCards) {
    const replacementCards = [];
    const numNewCards = 16 - cardsInPlay.length + 2
    const newCards = deck.slice(deck.length - numNewCards);
    // deck.length = 60 -> slice from 58 to end of deck

    for (const card of cardsInPlay) {
      if (pairOfCards.includes(card)) {
        if (newCards.length > 0) {
          replacementCards.push(newCards.pop())
        } 
      } else {
        replacementCards.push(card)
      }
    }
    updateDeck(deck.slice(0, deck.length - numNewCards))
    updateCardsInPlay(replacementCards);
    updateSelectedCards([]);
    // setTimeout(() => updateSelectedCards([]), 1000);
  }
  
  return(
    <div id='play-area'>
      {cardsInPlay.map(card => {
        return(
        <Card 
          key={card.id}
          color={card.color}
          word={card.word}
          isSelected={selectedCards.includes(card)}
          onClick={selectedCards.includes(card) ? null : () => selectCard(card)}
        />)
    })}
    </div>
  );
}