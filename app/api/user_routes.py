from flask import Blueprint, jsonify, request
from flask_login import login_required, current_user
from app.models import User, Watchlist, Commodity, db

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


@user_routes.route('/<int:id>')
@login_required
def user(id):
    user = User.query.get(id)
    return user.to_dict()


@user_routes.route('/<int:id>/watchlist')
@login_required
def getUserWatchlist(id):
    user = User.query.get(id)
    return user.watchlist.to_dict()


@login_required
@user_routes.route('/<int:id>/watchlist', methods=["POST"])
def addToWatchlist(id):
    data = request.get_json()
    user = User.query.get(id)
    commodity = Commodity.query.get(data['commodity_id'])
    user.watchlist.commodities.append(commodity)
    db.session.add(user)
    db.session.commit()
    return user.watchlist.to_dict()


@user_routes.route('/<int:id>/watchlist', methods=["DELETE"])
@login_required
def removeFromWatchlist(id):
    data = request.get_json()
    user = User.query.get(id)
    commodity = Commodity.query.get(data['commodity_id'])
    user.watchlist.commodities.remove(commodity)
    db.session.add(user)
    db.session.commit()
    return user.watchlist.to_dict()






# POST user/id/watchlist body { commod_id: 3 }
# user = User.get(id)
# commodity = Commodity.get(commod_id)
# wl = WatchList.create({ user=user })
# wl.commodities.append(commodity)
#  