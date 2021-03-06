import uuid from 'uuid';
import database from '../firebase/firebase';

/* Redux action steps
	1. Component calls the action generator
	2. Action generator returns an {object}
	3. Component dispatches {object}
	4. The redux store changes (runs the reducers)

	-----------------------------------------------
	Async actions
	1. Component calls the action generator
	2. Action generator returns a function()
	3. Component dispatches function
	4. Function runs (has the ability to dispatch other actions and run database code/interactions)
*/
export const addExpense = expense => ({
	type: 'ADD_EXPENSE',
	expense
});

// getState comes from 'redux-thunk'
export const startAddExpense = (expenseData = {}) => {
	return (dispatch, getState) => {
		const uid = getState().auth.uid;
		const {
			description = '',
			note = '',
			amount = 0,
			createdAt = 0
		} = expenseData;
		const expense = { description, note, amount, createdAt };

		return database
			.ref(`users/${uid}/expenses`)
			.push(expense)
			.then(ref => {
				// dispatch the action so redux store changes
				dispatch(
					addExpense({
						id: ref.key,
						...expense
					})
				);
			});
	};
};
// REMOVE_EXPENSE
export const removeExpense = ({ id } = {}) => ({
	type: 'REMOVE_EXPENSE',
	id
});

export const startRemoveExpense = ({ id } = {}) => {
	return (dispatch, getState) => {
		const uid = getState().auth.uid;
		return database
			.ref(`users/${uid}/expenses/${id}`)
			.remove()
			.then(() => {
				dispatch(removeExpense({ id }));
			});
	};
};

// EDIT_EXPENSE
export const editExpense = (id, updates) => ({
	type: 'EDIT_EXPENSE',
	id,
	updates
});

export const startEditExpense = (id, updates) => {
	return (dispatch, getState) => {
		const uid = getState().auth.uid;
		return database
			.ref(`users/${uid}/expenses/${id}`)
			.update(updates)
			.then(() => {
				dispatch(editExpense(id, updates));
			});
	};
};

// GET/SET_EXPENSES (dispatch, async action)
export const getExpenses = expenses => ({
	type: 'GET_EXPENSES',
	expenses
});

// fetch all expense data once
// parse data into array
export const startGetExpenses = () => {
	return (dispatch, getState) => {
		const uid = getState().auth.uid;
		return database
			.ref(`users/${uid}/expenses`)
			.once('value')
			.then(snapshot => {
				const expenses = [];
				snapshot.forEach(child => {
					expenses.push({ id: child.key, ...child.val() });
				});
				dispatch(getExpenses(expenses));
			});
	};
};
