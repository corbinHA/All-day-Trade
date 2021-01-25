import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import styled from 'styled-components';
import CommodityCard from './CommodityCard';

const HomeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px;
  padding-top: 0px;
  padding-right: 0px;
  margin-right: 0px;
  height: 100%;
  width: 100%;
  background: blue;
`;

const CommodityList = styled.ul`
  background: green;
  display: flex;
  flex-wrap: wrap;
  width: 60%;
  height: 100vh;
  overflow: scroll;
  overflow-x: hidden;
`;
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
    <>
      <HomeContainer>
        <CommodityList>
          {commodities.length ?
            (commodities.map((commodity, idx) => (
              <CommodityCard key={idx} commodity={commodity} />
            ))) : ''}
        </CommodityList>
      </HomeContainer>
    </>
  );
}
