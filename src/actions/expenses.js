import uuid from 'uuid';
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
export const addExpense = ({
	description = '',
	note = '',
	amount = 0,
	createdAt = 0
} = {}) => ({
	type: 'ADD_EXPENSE',
	expense: {
		id: uuid(),
		description,
		note,
		amount,
		createdAt
	}
});
// REMOVE_EXPENSE
export const removeExpense = ({ id } = {}) => ({
	type: 'REMOVE_EXPENSE',
	id
});
// EDIT_EXPENSE
export const editExpense = (id, updates) => ({
	type: 'EDIT_EXPENSE',
	id,
	updates
});
