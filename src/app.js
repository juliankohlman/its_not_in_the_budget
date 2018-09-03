import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { startGetExpenses } from './actions/expenses';
// import { addExpense } from './actions/expenses';
// import { setTextFilter } from './actions/filters';
// import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';
import './firebase/firebase';
// import './playground/promises';

const store = configureStore();

// store.dispatch(
// 	addExpense({ description: 'Water bill', note: 'pay next week', amount: 45 })
// );
// store.dispatch(
// 	addExpense({ description: 'Gas bill', note: 'pay next month', amount: 50 })
// );
// store.dispatch(addExpense({ description: 'Rent', amount: 109500 }));

// const state = store.getState();
// const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
// console.log(visibleExpenses);
const jsx = (
	<Provider store={store}>
		<AppRouter />
	</Provider>
);

ReactDOM.render(<p>Loading expenses..</p>, document.getElementById('app'));

store.dispatch(startGetExpenses()).then(() => {
	ReactDOM.render(jsx, document.getElementById('app'));
});
