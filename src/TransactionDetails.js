import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const TransactionDetails = () => {
  const { schoolId } = useParams();
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    axios.get(`/api/transactions/school/${schoolId}`)
      .then(response => setTransactions(response.data))
      .catch(error => console.error(error));
  }, [schoolId]);

  return (
    <div>
      <h1>Transactions for School {schoolId}</h1>
      <ul>
        {transactions.map(tx => (
          <li key={tx.collect_id}>
            {tx.custom_order_id} - {tx.status}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TransactionDetails;
