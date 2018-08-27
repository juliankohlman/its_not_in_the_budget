import { createStore } from 'redux';

const add = ({ a, b }) => a + b;

console.log(add({ a: 1, b: 12 }));

// action generators are functions that return action objects
const incrementCount = ({ incrementBy = 1 } = {}) => ({
	type: 'INCREMENT',
	incrementBy
});

// const decrementCount
const decrementCount = ({ decrementBy = 1 } = {}) => ({
	type: 'DECREMENT',
	decrementBy
});

const setCount = ({ count }) => ({
	type: 'SET',
	count
});

const resetCount = () => ({
	type: 'RESET'
});

// Reducers
// 1. Reducers are pure functions
// 2. Never change state or action

const countReducer = (state = { count: 0 }, action) => {
	const incrementBy =
		typeof action.incrementBy === 'number' ? action.incrementBy : 1;
	const decrementBy =
		typeof action.decrementBy === 'number' ? action.decrementBy : 1;

	switch (action.type) {
		case 'INCREMENT':
			return { count: state.count + incrementBy };
		case 'DECREMENT':
			return { count: state.count - decrementBy };
		case 'RESET':
			return { count: 0 };
		case 'SET':
			return { count: action.count };
		default:
			return state;
	}
};

const store = createStore(countReducer);

const unsubcribe = store.subscribe(() => {
	console.log(store.getState());
});

// Actions --> an object that gets sent to the store

store.dispatch(incrementCount({ incrementBy: 5 }));

store.dispatch(incrementCount());

store.dispatch(resetCount());

store.dispatch(decrementCount());

store.dispatch(decrementCount({ decrementBy: 10 }));

store.dispatch(setCount({ count: 100 }));
