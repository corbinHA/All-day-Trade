from flask import Blueprint, jsonify, request
from app.models import User, db, Watchlist
from flask_login import current_user

watchlist_routes = Blueprint('watchlist', __name__)