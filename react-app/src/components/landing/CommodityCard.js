import React, { useEffect, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import styled from 'styled-components';

export default function CommodityCard({ commodity }) {
  return (
    <>
      <CommodityLink to={`/commodity/${commodity.symbol}`}>
        <CardContainer>
          {/* <CardGraph
                    style={{
                        backgroundImage: ,
                    }}
                /> */}
          <CardHeader>{commodity.name}</CardHeader>
          <InfoHolder>
            <SymbolBar>{commodity.symbol}</SymbolBar>
            {/* <PriceSpan>${commodity.price_points.last_price}</PriceSpan> */}
          </InfoHolder>
        </CardContainer>
      </CommodityLink>
    </>
  );
}

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 600px;
  height: 100px;
  margin-right: 30px;
  margin-bottom: 30px;
  border-radius: 4px;
  box-shadow: rgba(18, 18, 20, 0.1) 0px 0px 1px,
    rgba(18, 18, 20, 0.2) 0px 2px 4px;
  text-decoration: none;
  background: tomato;
`;

const CommodityLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  width: 45%;
`;
const CardGraph = styled.div`
  border-radius: 3px;
  height: 200px;
  width: 100%;
  background-size: cover;
  background-position: center;
`;

const SymbolBar = styled.div`
  display: flex;
  margin: 10px 10px;
  background: blue;
`;

const CardHeader = styled.span`
  font-size: 1.2em;
  font-weight: 700;
  margin: 0px 20px;
  margin-top: 10px;
`;

const InfoHolder = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px 10px;
  border-top: 1px solid #c4c4c4;
`;
const PriceSpan = styled.span`
  font-size: 1rem;
  font-weight: 700;
  margin: 10px 10px;
`;
