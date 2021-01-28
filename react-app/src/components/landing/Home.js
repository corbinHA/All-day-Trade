import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import styled from 'styled-components';
import CommodityCard from './CommodityCard';

export default function Home() {
  const [commodities, setCommodities] = useState({});

  useEffect(() => {
    (async () => {
      const response = await fetch(`/api/commodity/recent`);
      const res = await response.json();
      if (res.error) {
        return <Redirect exact to="/" />;
      }
      setCommodities(res.commodities);
    })();
  }, []);
  return (
    <div className="commodity-wrapper">
      <div className="home-content-wrapper">
        {commodities.length
          ? commodities.map((commodity, idx) => (
              <CommodityCard key={idx} commodity={commodity} />
            ))
          : ''}
      </div>
    </div>
  );
}
