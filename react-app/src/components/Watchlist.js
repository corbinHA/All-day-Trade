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
      <div>
          {watchlist.commodities.map((el) => {
              return <div key={el.id}>
                  {el.name}
                  {el.symbol}
              </div>
          })}
      </div>
  )
}
