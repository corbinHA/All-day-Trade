from flask import Blueprint, jsonify
from app.models import User, db, Transaction
from app.forms.transaction_form import TransactionForm
from flask_login import current_user

transaction_routes = Blueprint('transaction', __name__)


@transaction_routes.route('/users/<user_id>')
def getUserTransactions(user_id):
    transactions = Transactions.query.filter_by(user_id=user_id).all()
    if transactions:
        data = [transaction.to_dict() for transaction in transactions]
        return {"transactions": data}
    return {"error": "Not found"}


@transaction_routes.route('/buy', methods=["POST"])
def newTransaction():
    form = TransactionForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        transaction = Transaction(
            user_id=current_user.get_id(),
            commodity_id=form.data['commodityId'],
            amount=form.data['amount'],
            price=form.data['price'],
        )
        user = User.query.get(transaction.user_id)
        error = ""
        if user.balance < transaction.amount * transaction.price:
            error = "insufficient balance to buy this commodity"
        if error:
            return {"error": error}, 400
        user.balance -= transaction.amount * transaction.price
        db.session.add(transaction)
        db.session.commit()
        return transaction.to_dict()
    print(form.errors)
    return jsonify(form.errors)


# @transaction_routes.route('/sell', methods=["POST"])
# def sellTransaction(id):
#     data = request.get_json()
#     user_id = current_user.get_id()
#     amount = data['amount']
#     price = data['price']
#     commodity_id = data["commodityId"]

#     old_transaction = Transaction.query.get(id)
#     error = ""
#     if !old_transaction:
#         error = "Could not find transactions"
#     elif transaction.amount <= 0:
#         error = "Must own at least one share to sell"
#     elif amount > transaction.amount:
#         error = "Can not sell more shares than you own!"
#     if error:
#         return {"error": error}, 400
#     transaction = Transaction(
#         user_id=user_id,
#         commodity_id=commodity_id,
#         amount=amount,
#         price=price,
#     )
#     user = User.query.get(transaction.user_id)
#     user.balance += transaction.amount * transaction.price
#     db.session.add(transaction)
#     db.session.commit()
#     return transaction.to_dict()
#     print(form.errors)
#     return jsonify(form.errors)

    # send the transaction id back, and selling amount
    # query database for that transaction
    # create new transation
    # change amount to negative
    # change price negative of current value
    #  on the user balance add the price sold at time the amount
