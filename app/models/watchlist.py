from .db import db
from datetime import datetime


class Watchlist(db.Model):
    __tablename__ = 'watchlists'

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)
    commodity_id = db.Column(db.Integer, db.ForeignKey(
        "commodities.id"), nullable=False)
    price = db.Column(db.Numeric(8, 2), nullable=False)
    created_at = db.Column(db.DateTime, nullable=False, default=datetime.now())

    users = db.relationship("User", back_populates="watchlists")
    commodities = db.relationship("Commodity", back_populates="watchlists")

    def to_dict(self):
        return {
            "id": self.id,
            "user_id": self.user_id,
            "commodity_id": self.commodity_id,
            "price": self.price,
            "created_at": self.created_at,
            "commodity": self.commodities.to_dict()
        }
