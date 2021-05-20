function PlayArea() {
  let cards = [];
  let tempData = {};

  fetch("/cards")
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    tempData = data[0];
    console.log(tempData.word);
    // cards.push(<Card color=data.color word=data.word />)
    
  })

  return(
    <React.Fragment>
      {/* <Card id={tempData.id} color={tempData.color} word={tempData.word} /> */}
      <Card id='0a' color='blue' word= 'hackbright' />
      <Card id='0b' color='blue' word='student' />
    </React.Fragment>
  );
}