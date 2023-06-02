from flask import request
from API import app, database, bcrypt
from API.models import Usuario
import json


@app.route("/", methods=["GET", "POST"])
def api():
    return {"nome": "nome"}


@app.route("/cadastrar", methods=["POST"])
def cadastrar():
    if request.method in "GETPUTPATCHDELETE":
        return {"erro": "metodo invalido"}

    info_cadastro = json.loads(request.data.decode('utf-8'))

    for chave in info_cadastro:
        if chave == "":
            return {"erro": "sao necessarios 4 parâmetros para o cadastro do usuario"}

    usuario = Usuario(
        nome=info_cadastro["nome"],
        sobrenome=info_cadastro["sobrenome"],
        email=bcrypt.generate_password_hash(info_cadastro["email"]),
        senha=bcrypt.generate_password_hash(info_cadastro["senha"])
    )

    with app.app_context():
        database.session.add(usuario)
        database.session.commit()
    return ""
