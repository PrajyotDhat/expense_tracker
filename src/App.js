import React from 'react';
import './App.css';
import { GlobalProvider } from './context/GlobalState';
import Header from './components/Header';
import { AddTransaction } from './components/AddTransaction';
import { Balance } from './components/Balance';
import { IncomeExpenses } from './components/IncomeExpense';
import { TransactionList } from './components/TransactionList';

function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTransaction />
      </div>
    </GlobalProvider>

  );
}

export default App;

