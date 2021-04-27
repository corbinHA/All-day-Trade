from flask import Blueprint, jsonify, request
from app.models import User, db, Watchlist
from flask_login import current_user

watchlist_routes = Blueprint('watchlist', __name__)


@watchlist_routes.route('/')
def getWatchlist():
    user = current_user.get_id()
    watchlist = Watchlist.query.get(user)
    return watchlist.to_dict()
    

@watchlist_routes.route('/', method=["POST"])
def addToWatchlist():
    data = request.get_json()
    