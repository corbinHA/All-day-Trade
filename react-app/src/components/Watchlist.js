import React, {useEffect, useState} from 'react';
import { commodity, user } from '../services';

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
      <div className="watchlist-wrapper">
          {watchlist.commodities.map((commoditiy) => {
              return (
              <div key={commoditiy.id}>
                  {commoditiy.name}
                  {commoditiy.symbol}
              </div>
              )
          })}
      </div>
  )
}
