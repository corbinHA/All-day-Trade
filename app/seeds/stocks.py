from app.models import db, Commodity


def seed_stocks():
    data = fetch(
        "https://www.quandl.com/api/v3/datatables/WORLDBANK/WLD_GOLD.csv?ticker=WLD_GOLD&api_key=cw_yb-2sxho6vEFcfaGR")
    general = Commodity(

    )


def remove_stock():
    db.session.execute('TRUNCATE commodities;')
    db.session.commit()
