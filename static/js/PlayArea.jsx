/** 
 * Functionality to display table cards and to remove matching pairs 
 */ 


function PlayArea({deck, updateDeck, cardsInPlay, updateCardsInPlay, playing, updatePlaying}) {

  const [selectedCards, updateSelectedCards] = React.useState([]); 

  React.useEffect(() => {
    let setOfCards = new Set(cardsInPlay);
    if (setOfCards.size === 1 && setOfCards.has(null)) {
      alert("WE HAVE A WINNER!!! 🏆");
      updatePlaying(false);
    }
  }, [cardsInPlay])

  function selectCard(card){
    if (selectedCards.length < 2){
      // let selected = [];
      // ... -> 'spread operator'
      const selected = [...selectedCards, card];
      updateSelectedCards(selected);

      console.log('selectedCards', selectedCards)

      if (selected.length === 2){
        // check card.word matches a previous selection
        if(selected[0].word === selected[1].word)
          console.log('Found a match', selected[0].word)
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
        } else {
          replacementCards.push(null);
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
        card ? <Card 
          key={card.id}
          color={card.color}
          word={card.word}
          isSelected={selectedCards.includes(card)}
          onClick={selectedCards.includes(card) ? null : () => selectCard(card)}
        /> : <div 
          className='card'
          />
        )
    })}
    </div>
  );
}