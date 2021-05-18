"""Server route for single page react memory game"""


from flask import Flask, render_template

app = Flask(__name__)

@app.route("/")
def homepage():
  """Render app."""

  return render_template('App.html')


if __name__ == '__main__':
  app.run(debug='True', host='0.0.0.0', port='5000') 



