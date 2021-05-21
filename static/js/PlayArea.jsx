function PlayArea() {
  const [cardData, updateCardData] = React.useState([]);
  const [cardsInPlay, updateCardsInPlay] = React.useState([]);
  

  React.useEffect( () => {
    fetch("/cards")
    .then(res => res.json())
    .then(data => updateCardData(data))
  }, [])


  // updateCardsInPlay(cardData.slice(0,16));
 
  return(
    <div id='play-area'>
      {cardData.map(card => {
        <Card 
          key={card.id}
          color={card.color}
          word={card.word}
        />
      })}
      <Card id='0a' color='green' word= 'hackbright' />
      <Card id='0b' color='blue' word='student' />
    </div>
  );
}