from API import app


@app.route("/", methods=["GET", "POST"])
def api():
    print("Teste da API")
    return {"nome": "nome"}
