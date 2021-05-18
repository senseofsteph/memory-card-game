"""Server route for single page react memory game"""


from flask import Flask

app = Flask(__name__)

@app.route("/")
def homepage():
  """Render app."""

  return('Hi')


if __name__ == '__main__':
  app.run(debug='True', host='0.0.0.0', port='5000') 



