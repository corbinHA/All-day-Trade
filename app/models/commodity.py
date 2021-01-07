from .db import db
from datetime import datetime


class Commodity(db.Model):
    __tablename__ = "commodities"

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50), nullable=False)
    symbol = db.Column(db.String(50), nullable=False)
    high = db.Column(db.Numeric(8, 2), nullable=False)
    low = db.Column(db.Numeric(8, 2), nullable=False)
    open_price = db.Column(db.Numeric(8, 2), nullable=False)
    last_price = db.Column(db.Numeric(8, 2), nullable=False)
    created_at = db.Column(db.DateTime, nullable=False, default=datetime.now())

    transactions = db.relationship("Transaction", back_populates="commodity")
    watchlists = db.relationship("Watchlist", back_populates="commodity")

    def to_dict(self):
        return {
            "id": self.id,
            "name": self.name,
            "symbol": self.symbol,
            "high": float(self.high),
            "low": float(self.low),
            "open_price": float(self.open_price),
            "last_price": float(self.last_price),
            "created_at": self.created_at
        }
