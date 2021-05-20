function PlayArea() {
  let cards = [];
  let tempData = {};

  fetch("/cards")
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    tempData = data[0];
    console.log(tempData);
    // cards.push(<Card color=data.color word=data.word />)
    
  })

  return(
    <React.Fragment>
      <Card color={tempData.color} word={tempData.word} />
    </React.Fragment>
  );
}