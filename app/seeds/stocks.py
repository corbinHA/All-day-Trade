from app.models import db, Commodity


def seed_stocks():
    commodity = Commodity(
        name="Gold",
        symbol="GC",
        high=1543.09,
        low=1540.89,
        open_price=1541.55,
        last_price=1542.78,
        price_date="2021-01-19"
    )
    db.session.add(commodity)

    commodity2 = Commodity(
        name="Gold",
        symbol="GC",
        high=1550.12,
        low=1539.50,
        open_price=1540.01,
        last_price=1541.55,
        price_date="2021-01-18"
    )
    db.session.add(commodity2)

    commodity3 = Commodity(
        name="Gold",
        symbol="GC",
        high=1549.04,
        low=1540.01,
        open_price=1547.15,
        last_price=1540.01,
        price_date="2021-01-17"
    )
    db.session.add(commodity3)

    commodity4 = Commodity(
        name="Gold",
        symbol="GC",
        high=1547.15,
        low=1500.58,
        open_price=1500.58,
        last_price=1547.15,
        price_date="2021-01-16"
    )
    db.session.add(commodity4)

    commodity5 = Commodity(
        name="Gold",
        symbol="GC",
        high=1510.12,
        low=1488.65,
        open_price=1497.55,
        last_price=1500.58,
        price_date="2021-01-15"
    )
    db.session.add(commodity5)

    commodity6 = Commodity(
        name="Gold",
        symbol="GC",
        high=1497.55,
        low=1355.76,
        open_price=1355.76,
        last_price=1497.55,
        price_date="2021-01-14"
    )
    db.session.add(commodity6)

    commodity7 = Commodity(
        name="Gold",
        symbol="GC",
        high=1443.90,
        low=1355.76,
        open_price=1413.23,
        last_price=1355.76,
        price_date="2021-01-13"
    )
    db.session.add(commodity7)

    commodity8 = Commodity(
        name="Gold",
        symbol="GC",
        high=1499.08,
        low=1413.23,
        open_price=1498.65,
        last_price=1413.23,
        price_date="2021-01-12"
    )
    db.session.add(commodity8)

    commodity9 = Commodity(
        name="Gold",
        symbol="GC",
        high=1498.65,
        low=1300.12,
        open_price=1336.89,
        last_price=1498.65,
        price_date="2021-01-11"
    )
    db.session.add(commodity9)

    commodity10 = Commodity(
        name="Gold",
        symbol="GC",
        high=1336.89,
        low=1313.23,
        open_price=1326.06,
        last_price=1336.89,
        price_date="2021-01-10"
    )
    db.session.add(commodity10)

    commodity11 = Commodity(
        name="Gold",
        symbol="GC",
        high=1399.82,
        low=1326.06,
        open_price=1348.94,
        last_price=1326.06,
        price_date="2021-01-09"
    )
    db.session.add(commodity11)

    commodity12 = Commodity(
        name="Gold",
        symbol="GC",
        high=1455.64,
        low=1348.94,
        open_price=1413.27,
        last_price=1348.94,
        price_date="2021-01-08"
    )
    db.session.add(commodity12)

    commodity13 = Commodity(
        name="Gold",
        symbol="GC",
        high=1476.89,
        low=1413.27,
        open_price=1452.67,
        last_price=1413.27,
        price_date="2021-01-07"
    )
    db.session.add(commodity13)

    commodity14 = Commodity(
        name="Gold",
        symbol="GC",
        high=1452.67,
        low=1298.06,
        open_price=1300.00,
        last_price=1452.67,
        price_date="2021-01-06"
    )
    db.session.add(commodity14)

    commodity15 = Commodity(
        name="Gold",
        symbol="GC",
        high=1410.89,
        low=1300.00,
        open_price=1378.99,
        last_price=1300.00,
        price_date="2021-01-05"
    )
    db.session.add(commodity15)

    db.session.commit()


def remove_stock():
    db.session.execute('TRUNCATE commodities;')
    db.session.commit()
