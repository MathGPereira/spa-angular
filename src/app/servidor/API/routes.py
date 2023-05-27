from API import app


@app.route("/", methods=["GET", "POST"])
def api():
    return {"nome": "nome"}
