// Expenses Reducer
const expensesReducerDefault = [];

export default (state = expensesReducerDefault, action) => {
	switch (action.type) {
		case 'ADD_EXPENSE':
			return [...state, action.expense];
		case 'REMOVE_EXPENSE':
			return state.filter(i => i.id !== action.id);
		case 'EDIT_EXPENSE':
			return state.map(
				i => (i.id === action.id ? { ...i, ...action.updates } : i)
			);
		default:
			return state;
	}
};
