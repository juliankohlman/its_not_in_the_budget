import { createStore, combineReducers } from 'redux';

const demoState = {
  // array of objects
  expenses: [{
    id: 'asdf',
    description: 'July Rent',
    note: 'A random not about the expense',
    amount: 54500,
    createdAt: 0,
  }],
  filters: {
    text: 'rent',
    sortBy: 'amount', // date or amount
    startDate: undefined,
    endDate: undefined,
  }
};