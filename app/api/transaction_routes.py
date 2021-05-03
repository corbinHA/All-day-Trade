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
        buy_sell=data['buy_sell']
    )
    user = User.query.get(transaction.user_id)

    if transaction.buy_sell == True:
        user.balance = float(user.balance) - float(transaction.amount) * float(transaction.price)
    else:
        user.balance = float(user.balance) + float(transaction.amount) * float(transaction.price)

    db.session.add(transaction)
    db.session.commit()
    return transaction.to_dict()

