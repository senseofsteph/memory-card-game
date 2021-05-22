function PlayArea({deck, updateDeck, cardsInPlay, updateCardsInPlay}) {

  const [selectedCards, updateSelectedCards] = React.useState([]); 

  function selectCard(card){
    if (selectedCards.length < 2){
      let selected = [];
      selected = [...selectedCards, card]
      updateSelectedCards(selected);
      console.log('selectedCards', selectedCards)

      if (selected.length == 2){
        
        if(selected[0].word == selected[1].word)
          console.log('Found match', selected[0].word)
      }
    }
  }
  
  return(
    <div id='play-area'>
      {cardsInPlay.map(card => {
        return(
        <Card 
          key={card.id}
          color={card.color}
          word={card.word}
          onClick={() => selectCard(card)}
        />)
    })}
    </div>
  );
}