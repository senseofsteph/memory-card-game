/** 
 * Functionality to start deal, display table cards, and playing the game 
 */ 


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
    updateCardsInPlay(deck.slice(0, 16));
    updateDeck(deck.slice(16, deck.length));
  }


  let nullCount = 0;
  for(const card of cardsInPlay) {
    if(card === null) {
      nullCount++;
    }
  }


  if (playing) {
      return(
      <React.Fragment>
        <div class="scoring">
          <span class="count">{deck.length}</span> Cards left in Deck |{" "} 
          <span class="count">{cardsInPlay.length - nullCount}</span> Cards on Table
        </div>
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
          <div class='button-container'>
            <button onClick={initialDeal}>Deal</button>
          </div>
        </React.Fragment>  
      );
  }
}