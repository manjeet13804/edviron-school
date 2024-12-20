import React from 'react';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import TransactionsOverview from './TransactionsOverview';
import TransactionDetails from './TransactionDetails';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<TransactionsOverview />}/>
          <Route path="/details/:schoolId" element={<TransactionDetails/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
