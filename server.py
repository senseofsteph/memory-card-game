"""Server route for single page react memory game"""


from flask import Flask

app = Flask(__name__)

@app.route("/")
def homepage():
  """Render app."""



