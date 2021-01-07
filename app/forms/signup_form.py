from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import DataRequired, Email, ValidationError
from app.models import User


def email_exists(form, field):
    print("Checking if user exits", field.data)
    email = field.data
    user = User.query.filter(User.email == email).first()
    if user:
        raise ValidationError("User is already registered.")


def username_exists(form, field):
    print("Checking if user exits", form.data)
    print(form.data)
    username = field.data
    user = User.query.filter(User.username == username).first()
    if user:
        raise ValidationError("This username is already registered.")


class SignUpForm(FlaskForm):
    fullname = StringField('fullname', validators=[DataRequired()])
    username = StringField('username', validators=[
                           DataRequired(), username_exists])
    email = StringField('email', validators=[DataRequired(), email_exists])
    password = StringField('password', validators=[DataRequired()])
