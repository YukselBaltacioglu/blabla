from flask import Flask

app = Flask(__name__)


@app.route("/")
def Defination():
    return "flask denemesi"


if __name__ == "__main__":
    app.run(debug=True)