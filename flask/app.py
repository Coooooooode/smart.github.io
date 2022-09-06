from flask import Flask, render_template
app = Flask(__name__)

@app.route("/")
def home():
    return render_template("index.html")
@app.route("/計畫緣由")
def left_sidebar():
    return render_template("left-sidebar.html")
@app.route("/目前位置")
def right_sidebar():
    return render_template("right-sidebar.html")
@app.route("/目前容量")
def two_sidebar():
    return render_template("two-sidebar.html")
@app.route("/系統管理")
def no_sidebar():
    return render_template("no-sidebar.html")
@app.route("/管理設定")
def logined():
    return render_template("logined.html")
@app.route("/test")
def ha():
    return "ha"

if __name__ == "__main__":
    app.run()