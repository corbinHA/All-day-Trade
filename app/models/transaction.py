from .db import db
from datetime import datetime


class Transaction(db.Model):
    __tablename__ = "transactions"

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)
    commodity_id = db.Column(db.Integer, db.ForeignKey(
        "commodities.id"), nullable=False)
    amount = db.Column(db.Integer, nullable=False)
    price = db.Column(db.Numeric(8, 2), nullable=False)
    buy_sell = db.Column(db.Boolean, nullable=False, default=True)
    created_at = db.Column(db.DateTime, nullable=False, default=datetime.now())

    user = db.relationship("User")
    commodity = db.relationship("Commodity", uselist=False)

    def to_dict(self):
        return {
            "id": self.id,
            "user_id": self.user_id,
            "commodity_id": self.commodity_id,
            "amount": self.amount,
            "price": float(self.price),
            "buy/sell": self.buy_sell,
            "created_at": self.created_at,
            "commodity": self.commodity.to_dict(),
            "user": self.user.to_dict()
        }
