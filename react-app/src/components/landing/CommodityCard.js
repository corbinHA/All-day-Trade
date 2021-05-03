import React, { useEffect, useState }from 'react';
import { Link } from 'react-router-dom';
import { user } from '../../services';
import './CommodityCard.css';
import  { 
  IoIosAddCircleOutline, 
  IoIosAddCircle, 
  IoIosEye, 
  IoIosEyeOff 
} from 'react-icons/io'

export default function CommodityCard({ commodity, currentUser }) {
  const [ watchlist, setWatchlist ] = useState({});


  const fetchWatchlist = async () => {
    const fetchWatchlist = await user.getUsersWatchlist(currentUser.id);
    setWatchlist(fetchWatchlist)
    console.log(watchlist)
  }
    
  console.log(commodity.id)

  useEffect(() => {
    fetchWatchlist()
  }, [])

  const handleAdd = async (e) => {
    e.preventDefault();
    await user.addToWatchlist({
      id: currentUser.id,
      commodity_id: commodity.id
    });
    await fetchWatchlist();
  }

  const handleRemove = async (e) => {
    e.preventDefault();
    await user.removeFromWatchlist({
      id: currentUser.id,
      commodity_id: commodity.id
    });
    await fetchWatchlist();
  }


  return (
    <div className="card">
      <div>
        { commodity.id in watchlist ? (
          <IoIosEye
            className='commodity-eye'
          />,
          <IoIosEyeOff 
            onClick={handleRemove}
            className='commodity-eye-remove'
          />
        ) : (
          <IoIosAddCircleOutline
            className="commodity-add-outline"
          />,
          <IoIosAddCircle 
          className="commodity-add"
          onClick={handleAdd}
          />
        )}
      </div>
      <Link to={`/commodity/${commodity.symbol}`}>
        <div>

            <h1 className="commodity-name">
              {commodity.name} 
            </h1>
            
          <div className="">
            <p className="commodity-symbol">{commodity.symbol}</p>
            <div className="commodity-price">
              Current Price: ${commodity.price_points[0].last_price}
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
