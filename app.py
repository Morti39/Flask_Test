from flask import Flask , render_template ,  request
app = Flask(__name__)
@app.route ("/")
def index():
    return render_template("index.html")
@app.route("/registration")
def reg():
    return render_template("registration.html")
@app.route ("/profile")
def prof():
    return  render_template("profile.html")
if __name__ == "__main__":
    app.run(debug=True)