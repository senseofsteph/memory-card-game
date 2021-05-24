function Card({word, color, id, onClick, isSelected}) {
  return(
    <div className='card' 
    id={id} 
    style={{color: color}}
    onClick={onClick}
    >
      {isSelected ? word : ""}
    </div>
  )
}