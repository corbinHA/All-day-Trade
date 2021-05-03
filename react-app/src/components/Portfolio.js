import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { transaction } from '../services';

export default function Portfolio() {
  const [userTransactions, setUserTransactions] = useState(null);
  const { id } = useParams();

  const fetchTransaction = async () => {
    const fetchTransactions = await transaction.getTransactions({ id });
    setUserTransactions(fetchTransactions);
  };


  useEffect(() => {
    fetchTransaction();
  }, []);

  return (
    <div className="commodity-wrapper">
      <div className="home-content-wrapper">
        <div className="transaction-wrapper">
          <h1 className="transaction-title">
            Transaction History:
          </h1>
          {userTransactions
            ? userTransactions.transactions.map((transaction, idx) => (
                <div key={idx} className="transaction-history">
                  <h1 className="transaction-name">
                    {transaction.commodity.name}
                  </h1>
                  <div className="transaction-info">
                    <div className="transaction">
                      <label>
                        Amount Bought
                      </label>
                      <p className="commodity-symbol">
                        {transaction.amount}
                      </p>
                    </div>
                    <div className="transaction">
                      <label>
                        Price Bought at
                      </label>
                      <p className="commodity-symbol">
                        {transaction.price}
                      </p>
                    </div>
                    <div className="transaction">
                      <label>
                        Total cost
                      </label>
                      <p className="commodity-symbol">
                        {transaction.price * transaction.amount}
                      </p>
                    </div>
                  </div>
                </div>
              ))
            : ''}
        </div>
      </div>
    </div>
  );
}
