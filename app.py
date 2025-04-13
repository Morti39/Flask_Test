from flask import Flask , render_template ,  request
app = Flask(__name__)
@app.route ("/")
def index():
    return render_template("index.html")
@app.route("/contacts")
def reg():
    return render_template("contacts.html")
@app.route ("/about")
def prof():
    return  render_template("about.html")
@app.route("/heroes")
def comp():
    return render_template('heroes.html')
if __name__ == "__main__":
    app.run(debug=True)