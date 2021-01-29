import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { commodity, transaction } from '../services';
import {
  XYPlot,
  WhiskerSeries,
  HorizontalGridLines,
  VerticalGridLines,
  XAxis,
  YAxis,
} from 'react-vis';
import { createTransaction } from '../services/transaction';

const makeDataPoint = (item) => {
  let y = (item.high + item.low) / 2;
  let yVariance = item.high - y;
  let x = Date.parse(item.price_date) * 0.2;
  let xVariance = 1;
  return { x, y, yVariance, xVariance };
};

const CommodityShowPage = () => {
  const [commodityItems, setCommodityItems] = useState(null);
  const [amount, setAmount] = useState(1);
  const { symbol } = useParams();
  const history = useHistory();

  const fetchCommodity = async () => {
    const fetchCommodity = await commodity.getCommodity({ symbol });
    const sorted = fetchCommodity.price_points.sort(
      (a, b) => Date.parse(a.price_date) - Date.parse(b.price_date)
    );
    setCommodityItems(sorted);
  };

  useEffect(() => {
    fetchCommodity();
  }, []);

  if (commodityItems === null) return <h3>loading</h3>;

  const latestCommodityItem = commodityItems[commodityItems.length - 1];

  const dataPoints = commodityItems.map((commodityItem) =>
    makeDataPoint(commodityItem)
  );

  const handleChange = (e) => {
    if (e.target.value > 0) {
      setAmount(e.target.value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    transaction.createTransaction({
      id: latestCommodityItem.commodity_id,
      amount,
      price: latestCommodityItem.last_price,
    });
    history.push('/home');
  };

  return (
    <div className="commodity-wrapper">
      <div className="home-content-wrapper">
        <div className="chart-page-wrapper">
          <div className="chart-wrapper">
            <XYPlot height={300} width={500} color={'#7289da'}>
              {/* <XAxis tickValues />
              <YAxis />
              <VerticalGridLines />
              <HorizontalGridLines /> */}
              <WhiskerSeries data={dataPoints} />
            </XYPlot>
          </div>
          <div>{latestCommodityItem.name}</div>
          <div className="label commodity-price">
            ${latestCommodityItem.last_price}
          </div>
          <form onSubmit={handleSubmit}>
            <div className="label-wrapper">
              <label className="label">qty</label>
              <input
                className="input"
                type="number"
                value={amount}
                onChange={handleChange}
              />
            </div>
            <button className="general-button-green">Buy</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CommodityShowPage;
