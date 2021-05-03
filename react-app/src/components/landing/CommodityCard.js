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
  const [ watch, setWatch ] = useState(null);


  const fetchWatchlist = async () => {
    const fetchWatchlist = await user.getUsersWatchlist(currentUser.id);
    setWatch(fetchWatchlist)
    console.log(watch)
  }


  useEffect(() => {
    fetchWatchlist()
  }, [])

  const handleAdd = async (e) => {
    e.preventDefault();
    await user.addToWatchlist({
      id: currentUser.id,
      commodity_id: commodity.id
    });
    fetchWatchlist();
  }

  const handleRemove = async (e) => {
    e.preventDefault();
    await user.removeFromWatchlist({
      id: currentUser.id,
      commodity_id: commodity.id
    });
    fetchWatchlist();
  }


  return (
    <div className="card">
      <Link to={`/commodity/${commodity.symbol}`}>
        <div>
          <div>
            <div>
              {watch.hasOwnProperty(commodity.id) ? (
                <IoIosEye
                  onClick={handleRemove}
                  style={{ color: 'white' }}
                />
              ) : (
                <IoIosAddCircleOutline
                  onClick={handleAdd}
                  style={{ color: 'white' }}
                />
              )}
            </div>

            <h1 className="commodity-name">
              {commodity.name} 
            </h1>
          </div>
            
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
