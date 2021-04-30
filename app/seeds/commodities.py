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

    cotton = Commodity(
        name="Cotton",
        symbol="CT")

    c1 = PricePoint(
        high=.90,
        low=.83,
        open_price=.85,
        last_price=.89,
        price_date="2021-01-19"
    )
    c1.commodity = cotton
    db.session.add(c1)

    c2 = PricePoint(
        high=.91,
        low=.79,
        open_price=.89,
        last_price=.82,
        price_date="2021-01-18"
    )
    c2.commodity = cotton
    db.session.add(c2)

    c3 = PricePoint(
        high=.85,
        low=.82,
        open_price=.82,
        last_price=.85,
        price_date="2021-01-17"
    )
    c3.commodity = cotton
    db.session.add(c3)

    c4 = PricePoint(
        high=.93,
        low=.81,
        open_price=.85,
        last_price=.90,
        price_date="2021-01-16"
    )
    c4.commodity = cotton
    db.session.add(c4)

    c5 = PricePoint(
        high=.90,
        low=.77,
        open_price=.90,
        last_price=.78,
        price_date="2021-01-15"
    )
    c5.commodity = cotton
    db.session.add(c5)

    c6 = PricePoint(
        high=.88,
        low=.76,
        open_price=.78,
        last_price=.86,
        price_date="2021-01-14"
    )
    c6.commodity = cotton
    db.session.add(c6)

    c7 = PricePoint(
        high=.88,
        low=.84,
        open_price=.86,
        last_price=.88,
        price_date="2021-01-13"
    )
    c7.commodity = cotton
    db.session.add(c7)

    c8 = PricePoint(
        high=.92,
        low=.85,
        open_price=.88,
        last_price=.89,
        price_date="2021-01-12"
    )
    c8.commodity = cotton
    db.session.add(c8)

    c9 = PricePoint(
        high=.89,
        low=.80,
        open_price=.89,
        last_price=.83,
        price_date="2021-01-11"
    )
    c9.commodity = cotton
    db.session.add(c9)

    c10 = PricePoint(
        high=.85,
        low=.83,
        open_price=.83,
        last_price=.84,
        price_date="2021-01-10"
    )
    c10.commodity = cotton
    db.session.add(c10)

    c11 = PricePoint(
        high=.86,
        low=.80,
        open_price=.84,
        last_price=.82,
        price_date="2021-01-09"
    )
    c11.commodity = cotton
    db.session.add(c11)

    c12 = PricePoint(
        high=.84,
        low=.80,
        open_price=.84,
        last_price=.81,
        price_date="2021-01-08"
    )
    c12.commodity = cotton
    db.session.add(c12)

    c13 = PricePoint(
        high=.89,
        low=.81,
        open_price=.81,
        last_price=.87,
        price_date="2021-01-07"
    )
    c13.commodity = cotton
    db.session.add(c13)

    c14 = PricePoint(
        high=.87,
        low=.81,
        open_price=.87,
        last_price=.81,
        price_date="2021-01-06"
    )
    c14.commodity = cotton
    db.session.add(c14)

    c15 = PricePoint(
        high=.85,
        low=.77,
        open_price=.81,
        last_price=.80,
        price_date="2021-01-05"
    )
    c15.commodity = cotton
    db.session.add(c15)

    db.session.commit()


def remove_commodities():
    db.session.execute('TRUNCATE commodities CASCADE;')
    db.session.commit()
