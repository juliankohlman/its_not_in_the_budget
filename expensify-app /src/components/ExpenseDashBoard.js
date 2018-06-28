import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters';

const ExpenseDashBoard = () => (
  <div>
    <ExpenseList />
    <ExpenseListFilters />
  </div>
);

export default ExpenseDashBoard;
