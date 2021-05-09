import React, {useEffect, useState} from 'react';
import { commodity, user } from '../services';
import { Link } from 'react-router-dom';

export default function Watchlist(props) {
    const [ watchlist, setWatchlist ] = useState(null);


  const fetchWatchlist = async () => {
    const fetchWatchlist = await user.getUsersWatchlist(props.currentUser.id);
    setWatchlist(fetchWatchlist)
  }

  useEffect(() => {
    fetchWatchlist()
  }, [])

  if (watchlist === null) return <div>loading</div>;

  return (
    <>
      <div className="watchlist-wrapper">
        <h1 className="transaction-title">
          My Watchlist:
        </h1>
          {watchlist.commodities.map((commodity) => {
              return (
              <Link to={`/commodity/${commodity.symbol}`}>
                <div key={commodity.id} className="transaction-history_watchlist">
                  <div className="transaction-name">
                    {commodity.name}
                  </div>
                  <div className="commodity-price_watchlist">
                    Current Value: {commodity.price_points[0].last_price}
                  </div>
                </div>
              </Link>
              )
          })}
      </div>
    </>
  )
}
