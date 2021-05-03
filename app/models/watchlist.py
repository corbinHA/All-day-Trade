from .db import db
from sqlalchemy import Table
from datetime import datetime


watchlist_commodity_table = Table('watchlists-commodities', db.Model.metadata,
                                  db.Column('watchlist_id', db.Integer,
                                            db.ForeignKey('watchlists.id')),
                                  db.Column('commodity_id', db.Integer,
                                            db.ForeignKey('commodities.id'))
                                  )


class Watchlist(db.Model):
    __tablename__ = 'watchlists'

    id = db.Column(db.Integer, primary_key=True)
    created_at = db.Column(db.DateTime, nullable=False, default=datetime.now())
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"))
    user = db.relationship("User")

    commodities = db.relationship(
        "Commodity", secondary=watchlist_commodity_table)

    def to_dict(self):
        return {
            "id": self.id,
            "user_id": self.user_id,
            "commodities": [ commodity.to_dict() for commodity in self.commodities ]

        }


# POST user/id/watchlist body { commod_id: 3 }
# user = User.get(id)
# commodity = Commodity.get(commod_id)
# wl = WatchList.create({ user=user })
# wl.commodities.append(commodity)
#    