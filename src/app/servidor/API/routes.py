from flask import request
from API import app, bcrypt, database
from API.models import Usuario
import json


@app.route("/", methods=["GET", "POST"])
def api():
    return {"nome": "nome"}


@app.route("/trocarSenha", methods=["PUT"])
def trocar_senha():
    if request.method in "GET POST PATCH DELETE":
        return {"erro": "metodo invalido"}

    info_alteracao = json.loads(request.data.decode("utf-8"))

    for chave in info_alteracao:
        if chave == "":
            return {"erro": "sao necessarios 3 parâmetros para a atualizacao da senha"}

    with app.app_context():
        usuario_troca_senha = Usuario.query.filter_by(email=info_alteracao["email"]).first()
        if usuario_troca_senha.email == info_alteracao["email"]:
            usuario_troca_senha.senha = bcrypt.generate_password_hash(info_alteracao["senha"])
            database.session.commit()

    return ""


@app.route("/cadastrar", methods=["POST"])
def cadastrar():
    if request.method in "GET PUT PATCH DELETE":
        return {"erro": "metodo invalido"}

    info_cadastro = json.loads(request.data.decode('utf-8'))

    for chave in info_cadastro:
        if chave == "":
            return {"erro": "sao necessarios 4 parâmetros para o cadastro do usuario"}

    usuario = Usuario(
        nome=info_cadastro["nome"],
        sobrenome=info_cadastro["sobrenome"],
        email=info_cadastro["email"],
        senha=bcrypt.generate_password_hash(info_cadastro["senha"])
    )

    with app.app_context():
        database.session.add(usuario)
        try:
            database.session.commit()
        except:
            raise Exception("Erro no método commit do banco de dados")
    return ""
