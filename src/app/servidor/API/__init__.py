from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_bcrypt import Bcrypt
from flask_cors import CORS
import os

app = Flask(__name__)
app.config["SECRET_KEY"] = os.urandom(32)
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///usuarios.db"

database = SQLAlchemy(app)
bcrypt = Bcrypt(app)
CORS(app)

# with app.app_context():
#     database.drop_all()
#     database.create_all()

from API import routes
