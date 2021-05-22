function PlayArea({deck, updateDeck, cardsInPlay, updateCardsInPlay}) {
  
  return(
    <div id='play-area'>
      {cardsInPlay.map(card => {
        return(
        <Card 
          key={card.id}
          color={card.color}
          word={card.word}
        />)
    })}
    </div>
  );
}