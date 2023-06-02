from flask import request
from API import app


@app.route("/", methods=["GET", "POST"])
def api():
    return {"nome": "nome"}


@app.route("/cadastrar", methods=["GET", "POST"])
def cadastrar():
    print(request.data)

    return {"teste": "cadastro"}
