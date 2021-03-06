"""Server route for single page react memory game"""


from flask import (Flask, render_template, jsonify)
from helpers import create_cards
from random import shuffle

app = Flask(__name__)


@app.route("/")
def homepage():
  """Render app."""

  return render_template('App.html')


@app.route("/cards")
def generate_cards():
  """Return JSON of new cards for memory game."""

  cards = create_cards(20)
  # shuffle(cards)

  return jsonify(cards)


#**** ------------------------------- ****#

#**** ------------------------------- ****#

if __name__ == '__main__':
  app.run(debug='True', host='0.0.0.0', port='5000') 



