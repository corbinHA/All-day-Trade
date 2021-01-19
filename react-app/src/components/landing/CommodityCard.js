import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default function CommodityCard({ boat }) {
    // const [price, setPrice] = useState([]);
    const [commodity, setCommodity] = useState({})

    useEffect(() => {
        (async () => {
            const response = await fetch(`/api/commodity/commodities`);
            const res = await response.json();
            if (res.error) {
                return <Redirect exact to="/" />;
            }
            setCommodity(res);
        })();
    }, []);

    return (
        <CommodityLink to={`/commodity/${commodity.name}`}>
            <CardContainer>
                {/* <CardImage
                style={{
                    backgroundImage: ,
                }}
            /> */}
                <CardHeader>
                    {boat.name.length <= 20 ? boat.name : boat.name.slice(0, 20) + '..'}
                </CardHeader>
                <InfoHolder>
                    <FeaturesBar>{commodity.name}</FeaturesBar>
                    <PriceSpan>${commodity.price}/day</PriceSpan>
                </InfoHolder>
            </CardContainer>
        </CommodityLink>
    );
}

const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 90%;
    margin-right: 30px;
    margin-bottom: 30px;
    border-radius: 4px;
    box-shadow: rgba(18, 18, 20, 0.1) 0px 0px 1px,
        rgba(18, 18, 20, 0.2) 0px 2px 4px;
    text-decoration: none;
`;

const CommodityLink = styled(Link)`
    text-decoration: none;
    color: inherit;
    width: 45%;
`;
const CardImage = styled.div`
    border-radius: 3px;
    height: 200px;
    width: 100%;
    background-size: cover;
    background-position: center;
`;

const FeaturesBar = styled.div`
    display: flex;
    margin: 10px 10px;
`;

const CardHeader = styled.span`
    font-size: 1.2em;
    font-weight: 700;
    margin: 0px 20px;
    margin-top: 10px;
`;

const AmenityIcon = styled.i`
    color: #666;
    margin-right: 6px;
`;

const InfoHolder = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 10px 10px;
    border-top: 1px solid #c4c4c4;
`;
const PeopleSpan = styled.span`
    font-size: 1rem;
    font-weight: 700;
    margin: 10px 10px;
`;
const PriceSpan = styled.span`
    font-size: 1rem;
    font-weight: 700;
    margin: 10px 10px;
`;
