import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TransactionsOverview = () => {
  const [transactions, setTransactions] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    axios.get('/api/transactions')
      .then(response => setTransactions(response.data))
      .catch(error => console.error(error));
  }, []);

  const filteredTransactions = transactions.filter(tx => tx.status.includes(filter));

  return (
    <div>
      <h1>Transactions Overview</h1>
      <input
        type="text"
        placeholder="Filter by status"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
      <ul>
        {console.log(transactions)}
        {filteredTransactions.map(tx => (
          <li key={tx.collect_id}>
            {tx.custom_order_id} - {tx.status}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TransactionsOverview;
