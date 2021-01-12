from wtforms.validators import DataRequired, Email, ValidationError
from wtforms import StringField, DecimalField, DateField, BooleanField
from flask_wtf import FlaskForm


class TransactionForm(FlaskForm):
    userId = StringField('userId')
    commodityId = StringField('commodityId', validators=[DataRequired()])
    amount = DecimalField('amount', validators=[DataRequired()])
    price = DecimalField('price', validators=[DataRequired()])
    buySell = BooleanField('buySell')
