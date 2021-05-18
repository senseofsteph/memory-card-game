from faker import Faker

fake = Faker()

def create_cards(num_cards):
  """Generate fake word and color for cards"""

  cards = []
  
  for i in range(num_cards):
    color = fake.safe_color_name()
    while color == 'white': # checking the color of the text
      color = fake.safe_color_name()
    word = fake.unique.word()
    cards.extend([{'id': str(i) + 'a', # creating pairs of cards
                  'word': word,
                  'color': color}, 
                  {'id': str(i) + 'b',
                  'word': word,
                  'color': color}])

  return cards
