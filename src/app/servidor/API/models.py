from API import database


class Usuario(database.Model):
    id = database.Column(database.Integer, primary_key=True)
    nome = database.Column(database.String, nullable=False)
    sobrenome = database.Column(database.String, nullable=False)
    email = database.Column(database.String, nullable=False, unique=True)
    senha = database.Column(database.String, nullable=False)
    foto_perfil = database.Column(database.String, nullable=False, default="default_usuario.jpg")


class Cliente(database.Model):
    id = database.Column(database.Integer, primary_key=True)
    nome = database.Column(database.String, nullable=False)
    sobrenome = database.Column(database.String, nullable=False)
    email = database.Column(database.String, nullable=False, unique=True)
    foto_cliente = database.Column(database.String, nullable=False, default="default_cliente.jpg")
    idade = database.Column(database.Integer, nullable=False)
    sexo = database.Column(database.String, nullable=False)
    tratamento = database.Column(database.Text, nullable=False)
