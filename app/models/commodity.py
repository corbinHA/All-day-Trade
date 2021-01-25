from .db import db
from datetime import datetime


class Commodity(db.Model):
    __tablename__ = "commodities"

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50), nullable=False)
    symbol = db.Column(db.String(50), nullable=False)

    price_points = db.relationship("PricePoint")

    def to_dict(self):
        return {
            "id": self.id,
            "name": self.name,
            "symbol": self.symbol,
            "price_points": [p.to_dict() for p in self.price_points]
        }
