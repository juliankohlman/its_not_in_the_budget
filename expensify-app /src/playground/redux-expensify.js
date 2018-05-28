import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';
// Possible actions
// ADD_EXPENSE
const addExpense = ({
  description = '', note = '', amount = 0, createdAt = 0,
} = {}) => ({
  type: 'ADD_EXPENSE',
  expense: {
    id: uuid(),
    description,
    note,
    amount,
    createdAt,
  },
});
// EDIT_EXPENSE

// SET_TEXT_FILTER
// SORT_BY_DATE
// SORT_BY_AMOUNT
// SET_START_DATE
// SET_END_DATE

// Expenses Reducer
const expensesReducerDefault = [];

const expensesReducer = (state = expensesReducerDefault, action) => {
  switch (action.type) {
    case 'ADD_EXPENSE':
      return [...state, action.expense];
    default:
      return state;
  }
};

const filtersReducerDefault = {
  text: '',
  sortBy: 'date',
  startDate: undefined,
  endDate: undefined,
};

const filtersReducer = (state = filtersReducerDefault, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

// Store creation
const store = createStore(combineReducers({
  expenses: expensesReducer,
  filters: filtersReducer,
}));

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(addExpense({ description: 'Rent', amount: 100 }));
store.dispatch(addExpense({ description: 'Netflix', amount: 300 }));

// root state object
const demoState = {
  // array of objects
  expenses: [
    {
      id: 'asdf',
      description: 'July Rent',
      note: 'A random not about the expense',
      amount: 54500,
      createdAt: 0,
    },
  ],
  filters: {
    text: 'rent',
    sortBy: 'amount', // date or amount
    startDate: undefined,
    endDate: undefined,
  },
};
