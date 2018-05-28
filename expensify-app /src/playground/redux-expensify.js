import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';
// Possible actions
// ADD_EXPENSE (action generator)
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
// REMOVE_EXPENSE
const removeExpense = ({ id } = {}) => ({
  type: 'REMOVE_EXPENSE',
  id,
});
// EDIT_EXPENSE
const editExpense = (id, updates) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates,
});

// Expenses Reducer
const expensesReducerDefault = [];

const expensesReducer = (state = expensesReducerDefault, action) => {
  switch (action.type) {
    case 'ADD_EXPENSE':
      return [...state, action.expense];
    case 'REMOVE_EXPENSE':
      return state.filter(i => i.id !== action.id);
    case 'EDIT_EXPENSE':
      return state.map(i => (i.id === action.id ? { ...i, ...action.updates } : i));
    default:
      return state;
  }
};

// SET_TEXT_FILTER
const setTextFilter = (text = '') => ({
  type: 'SET_TEXT_FILTER',
  text,
});
// SORT_BY_DATE
const sortByDate = () => ({
  type: 'SORT_BY_DATE',
});
// SORT_BY_AMOUNT
const sortByAmount = () => ({
  type: 'SORT_BY_AMOUNT',
});
// SET_START_DATE
const setStartDate = (startDate = undefined) => ({
  type: 'SET_START_DATE',
  startDate,
})
// SET_END_DATE
const setEndDate = (endDate = undefined) => ({
  type: 'SET_END_DATE',
  endDate,
})
const filtersReducerDefault = {
  text: '',
  sortBy: 'date',
  startDate: undefined,
  endDate: undefined,
};

const filtersReducer = (state = filtersReducerDefault, action) => {
  switch (action.type) {
    case 'SET_TEXT_FILTER':
      return { ...state, text: action.text };
    case 'SORT_BY_DATE':
      return { ...state, sortBy: 'date' };
    case 'SORT_BY_AMOUNT':
      return { ...state, sortBy: 'amount' };
    case 'SET_START_DATE':
      return { ...state, startDate: action.startDate };
    case 'SET_END_DATE':
      return { ...state, endDate: action.endDate };
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

// const expenseOne = store.dispatch(addExpense({ description: 'Rent', amount: 100 }));
// const expenseTwo = store.dispatch(addExpense({ description: 'Netflix', amount: 300 }));

// store.dispatch(removeExpense({ id: expenseOne.expense.id }));
// store.dispatch(editExpense(expenseTwo.expense.id, { amount: 500 }));

// store.dispatch(setTextFilter('rent'));
// store.dispatch(setTextFilter());

// store.dispatch(sortByAmount()); // amount
// store.dispatch(sortByDate()); // date

store.dispatch(setStartDate(125));
store.dispatch(setStartDate());

store.dispatch(setEndDate(1250));

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
