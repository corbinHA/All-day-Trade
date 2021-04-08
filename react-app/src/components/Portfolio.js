import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { transaction } from '../services';

export default function Portfolio() {
  const [userTransactions, setUserTransactions] = useState(null);
  const [show, setShow] = useState(true)
  const { id } = useParams();

  const fetchTransaction = async () => {
    const fetchTransactions = await transaction.getTransactions({ id });
    setUserTransactions(fetchTransactions);
  };

  const handleSubmit = async () => {
    await transaction.sellTransaction({ id });
  };

  useEffect(() => {
    fetchTransaction();
  }, []);

  return (
    <div className="commodity-wrapper">
      <div className="home-content-wrapper">
        <div>
          {userTransactions
            ? userTransactions.transactions.map((transaction, idx) => (
                <div key={idx}>
                  <h1 className="commodity-name">
                    {transaction.commodity.name}
                  </h1>
                  <div className="">
                    <div>
                      <label>Amount Bought</label>
                      <p className="commodity-symbol">{transaction.amount}</p>
                    </div>
                    <div>
                      <label>Price Bought at</label>
                      <p className="commodity-symbol">{transaction.price}</p>
                    </div>
                    <div>
                      <label>Total cost</label>
                      <p className="commodity-symbol">
                        {transaction.price * transaction.amount}
                      </p>
                    </div>
                  </div>
                  <button onClick={() => handleSubmit(), setShow(false)}>
                    Sell
                  </button>
                </div>
              ))
            : ''}
        </div>
      </div>
    </div>
  );
}
