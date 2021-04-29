import React from 'react';
import { Link } from 'react-router-dom';
import './CommodityCard.css';
import Ingot from '../../images/ingot.png';

export default function CommodityCard({ commodity }) {
  return (
    <div className="card">
      <Link to={`/commodity/${commodity.symbol}`}>
        <div>
          <h1 className="commodity-name">
            {commodity.name} <img src={Ingot} className="commodity-icon" />
          </h1>
          <div className="">
            <p className="commodity-symbol">{commodity.symbol}</p>
            <div>${commodity.price_points[0].last_price}</div>
          </div>
        </div>
      </Link>
    </div>
  );
}
