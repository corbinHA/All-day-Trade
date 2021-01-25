from .db import db


class PricePoint(db.Model):
    __tablename__ = "price_points"

    id = db.Column(db.Integer, primary_key=True)
    commodity_id = db.Column(db.Integer, db.ForeignKey(
        "commodities.id"), nullable=False)
    high = db.Column(db.Numeric(8, 2), nullable=False)
    low = db.Column(db.Numeric(8, 2), nullable=False)
    open_price = db.Column(db.Numeric(8, 2), nullable=False)
    last_price = db.Column(db.Numeric(8, 2), nullable=False)
    price_date = db.Column(db.DateTime, nullable=False)

    commodity = db.relationship("Commodity", back_populates="price_points")

    def to_dict(self):
        return {
            "id": self.id,
            "commodity_id": self.commodity_id,
            "high": float(self.high),
            "low": float(self.low),
            "open_price": float(self.open_price),
            "last_price": float(self.last_price),
            "price_date": self.price_date,
        }
