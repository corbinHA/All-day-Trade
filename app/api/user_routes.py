from flask import Blueprint, jsonify
from flask_login import login_required
from app.models import User

user_routes = Blueprint('users', __name__)


@user_routes.route('/')
@login_required
def users():
    users = User.query.all()
    return {"users": [user.to_dict() for user in users]}

# GET /api/user/id/commodities
@user_routes.route('/<int:id>/commodities')
@login_required
def getUserCommodities(id):
    user = User.query.get(id)
    user_commodities = {}
    for tx in user.transactions:
        user_commodities[tx.commodity.name] = 0
    for tx in user.transactions:
        if tx.buy_sell == True:
            user_commodities[tx.commodity.name] += tx.amount
        else:
            user_commodities[tx.commodity.name] -= tx.amount
    return user_commodities

# user.transactions = [
#     {commodity: 'gold', qty: 3, buy/sell: true},
#     {commodity: 'cotton', qty: 1, buy/sell: true},
#     {commodity: 'gold', qty: 2, buy/sell: true},
#     {commodity: 'gold', qty: 1, buy/sell: false},
# ]

# {
#     gold: 4,
#     cotton: 1
# }


@user_routes.route('/<int:id>')
@login_required
def user(id):
    user = User.query.get(id)
    return user.to_dict()
