from flask import Blueprint, jsonify
from app.models import User, db, Commodity
from flask_login import current_user

commodity_routes = Blueprint('commodity', __name__)


@commodity_routes.route('/commodities')
def getAllCommodity():
    commodities = Commodity.query.all()
    data = [commodity.to_dict() for commodity in commodities]
    return {"commodities": data}
