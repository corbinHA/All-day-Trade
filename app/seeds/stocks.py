from app.models import db, Commodity


def seed_stocks():

    general = Commodity(

    )


def remove_stock():
    db.session.execute('TRUNCATE commodities;')
    db.session.commit()
