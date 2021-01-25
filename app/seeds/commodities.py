from app.models import db, Commodity, PricePoint


def seed_commodities():
    gold = Commodity(
        name="Gold",
        symbol="GC")

    p1 = PricePoint(
        high=1543.09,
        low=1540.89,
        open_price=1541.55,
        last_price=1542.78,
        price_date="2021-01-19"
    )
    p1.commodity = gold
    db.session.add(p1)

    p2 = PricePoint(
        high=1550.12,
        low=1539.50,
        open_price=1540.01,
        last_price=1541.55,
        price_date="2021-01-18"
    )
    p2.commodity = gold
    db.session.add(p2)

    p3 = PricePoint(
        high=1549.04,
        low=1540.01,
        open_price=1547.15,
        last_price=1540.01,
        price_date="2021-01-17"
    )
    p3.commodity = gold
    db.session.add(p3)

    p4 = PricePoint(
        high=1547.15,
        low=1500.58,
        open_price=1500.58,
        last_price=1547.15,
        price_date="2021-01-16"
    )
    p4.commodity = gold
    db.session.add(p4)

    p5 = PricePoint(
        high=1510.12,
        low=1488.65,
        open_price=1497.55,
        last_price=1500.58,
        price_date="2021-01-15"
    )
    p5.commodity = gold
    db.session.add(p5)

    p6 = PricePoint(
        high=1497.55,
        low=1355.76,
        open_price=1355.76,
        last_price=1497.55,
        price_date="2021-01-14"
    )
    p6.commodity = gold
    db.session.add(p6)

    p7 = PricePoint(
        high=1443.90,
        low=1355.76,
        open_price=1413.23,
        last_price=1355.76,
        price_date="2021-01-13"
    )
    p7.commodity = gold
    db.session.add(p7)

    p8 = PricePoint(
        high=1499.08,
        low=1413.23,
        open_price=1498.65,
        last_price=1413.23,
        price_date="2021-01-12"
    )
    p8.commodity = gold
    db.session.add(p8)

    p9 = PricePoint(
        high=1498.65,
        low=1300.12,
        open_price=1336.89,
        last_price=1498.65,
        price_date="2021-01-11"
    )
    p9.commodity = gold
    db.session.add(p9)

    p10 = PricePoint(
        high=1336.89,
        low=1313.23,
        open_price=1326.06,
        last_price=1336.89,
        price_date="2021-01-10"
    )
    p10.commodity = gold
    db.session.add(p10)

    p11 = PricePoint(
        high=1399.82,
        low=1326.06,
        open_price=1348.94,
        last_price=1326.06,
        price_date="2021-01-09"
    )
    p11.commodity = gold
    db.session.add(p11)

    p12 = PricePoint(
        high=1455.64,
        low=1348.94,
        open_price=1413.27,
        last_price=1348.94,
        price_date="2021-01-08"
    )
    p12.commodity = gold
    db.session.add(p12)

    p13 = PricePoint(
        high=1476.89,
        low=1413.27,
        open_price=1452.67,
        last_price=1413.27,
        price_date="2021-01-07"
    )
    p13.commodity = gold
    db.session.add(p13)

    p14 = PricePoint(
        high=1452.67,
        low=1298.06,
        open_price=1300.00,
        last_price=1452.67,
        price_date="2021-01-06"
    )
    p14.commodity = gold
    db.session.add(p14)

    p15 = PricePoint(
        high=1410.89,
        low=1300.00,
        open_price=1378.99,
        last_price=1300.00,
        price_date="2021-01-05"
    )
    p15.commodity = gold
    db.session.add(p15)

    db.session.commit()


def remove_commodities():
    db.session.execute('TRUNCATE commodities CASCADE;')
    db.session.commit()
