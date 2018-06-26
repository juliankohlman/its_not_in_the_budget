import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store = configureStore();

store.dispatch(addExpense({description: 'water bill', note: 'pay next week', amount: 100}));
store.dispatch(addExpense({ description: 'gas bill', note: 'pay next month', amount: 50 }));

store.dispatch(setTextFilter('bill'));
const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpenses);



// props => stateless functional component
// this.props => class based component
ReactDOM.render(<AppRouter />, document.getElementById('app'));
