from flask import Blueprint, jsonify, request
from app.models import User, db, Transaction
from app.forms.transaction_form import TransactionForm
from flask_login import current_user

transaction_routes = Blueprint('transaction', __name__)


@transaction_routes.route('/<int:id>')
def getUserTransactions(id):
    transactions = Transaction.query.filter_by(user_id=id).all()
    print(transactions)
    if transactions:
        data = [transaction.to_dict() for transaction in transactions]
        return {"transactions": data}
    return {"error": "Not found"}


@transaction_routes.route('', methods=["POST"])
def newTransaction():
    data = request.get_json()
    transaction = Transaction(
        user_id=current_user.get_id(),
        commodity_id=data['id'],
        amount=data['amount'],
        price=data['price'],
    )
    user = User.query.get(transaction.user_id)
    error = ""
    if user.balance < transaction.amount * transaction.price:
        error = "insufficient balance to buy this commodity"
    if error:
        return {"error": error}, 400
    user.balance = float(user.balance) - float(transaction.amount) * float(transaction.price)
    db.session.add(transaction)
    db.session.commit()
    return transaction.to_dict()



@transaction_routes.route('/<int:id>', methods=["POST"])
def sellTransaction(id):
    data = request.get_json()
    transaction = Transaction(
        user_id=current_user.get_id(),
        amount=data['amount'],
        price=data['price'],
        commodity_id=data["commodityId"],
    )
    old_transaction = Transaction.query.get(id)
    error = ""
    if not old_transaction:
        error = "Could not find transactions"

    if error:
        return {"error": error}, 400
    user = User.query.get(transaction.user_id)
    user.balance = float(user.balance) + float(transaction.amount) * float(transaction.price)
    db.session.add(transaction)
    db.session.commit()
    

   