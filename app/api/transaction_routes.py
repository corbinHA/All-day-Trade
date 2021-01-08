from flask import Blueprint, jsonify
from app.models import User, db, Transaction

transaction_routes = Blueprint('transaction', __name__)


@transaction_routes.route('/users/<user_id>')
def getUserTransactions(user_id):
    transactions = Transactions.query.filter_by(user_id=user_id).all()
    if transactions:
        data = [transaction.to_dict() for transaction in transactions]
        return {"transactions": data}
    return {"error": "Not found"}


@transaction_routes.route('/')
def newTransaction():
    data = request.get_json()
    user_id = data["userId"]
    commodity_id = data["commodity_id"]
    try:
        amount = float(data["amount"])
    except ValueError:
        amount = None
    price = float(data["price"])
    
    error = ""
    if amount is None:
        error = "There must be an amount"
    if error:
        return {"error": error}, 400
