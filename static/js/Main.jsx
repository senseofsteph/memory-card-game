function Main() {
  const [playing, updatePlaying] = React.useState(false);
  const [deck, updateDeck] = React.useState([]);
  const [cardsInPlay, updateCardsInPlay] = React.useState([]);

  React.useEffect( () => {
    fetch("/cards")
    .then(res => res.json())
    .then(data => updateDeck(data))
  }, [])

  function initialDeal(){
    updatePlaying(true);
    updateCardsInPlay(deck.slice(0,16));
    updateDeck(deck.slice(16, deck.length));
  }


  // let tableCardsSet = new Set(cardsInPlay);
  // let tableCount = tableCardsSet.size;
  // if (tableCardsSet.has(null)) {
  //   tableCount --;
  // }

  let nullCount = 0;
  for(const card of cardsInPlay) {
    if(card == null) {
      nullCount++;
    }
  }


  if (playing) {
    return(
    <React.Fragment>
      <p id="deck-count">{deck.length} Cards in Deck</p>
      <p id="table-count">{cardsInPlay.length - nullCount} Cards on Table</p>
      <PlayArea 
        deck={deck} 
        updateDeck={updateDeck} 
        cardsInPlay={cardsInPlay} 
        updateCardsInPlay={updateCardsInPlay} 
        playing={playing}
        updatePlaying={updatePlaying}
      />
    </React.Fragment>
    )
  } else {
    return(
      <React.Fragment>
        <button onClick={initialDeal}>Deal</button>
      </React.Fragment>  
    );
  }
}