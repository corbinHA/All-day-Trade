from flask import Blueprint, jsonify
from app.models import User, db, Commodity
from flask_login import current_user

commodity_routes = Blueprint('commodity', __name__)


@commodity_routes.route('/<symbol>')
def getCommodity(symbol):
    commodity = Commodity.query.filter_by(symbol=symbol).first()
    return commodity.to_dict()


@commodity_routes.route('/recent')
def getAllRecentCommodity():
    commodities = Commodity.query.all()
    data = [commodity.to_dict() for commodity in commodities]
    print(data)
    return {'commodities': data}
