import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';

const ExpenseList = props => (
	<div className="content">
		<div className="list-header">
			<div className="show-on-mobile">Expenses</div>
			<div className="show-on-desktop">Expense</div>
			<div className="show-on-desktop">Amount</div>
		</div>
		{/* <h1>Expenses</h1>
		<hr /> */}

		{props.expenses.length === 0 ? (
			<div className="list-item list-item-msg">
				<span>No current expenses</span>
			</div>
		) : (
			props.expenses.map(expense => (
				<ExpenseListItem
					key={expense.id}
					// description={expense.description}
					// amount={expense.amount}
					// createdAt={expense.createdAt}
					{...expense}
				/>
			))
		)}
	</div>
);

const mapStateToProps = state => {
	return {
		expenses: selectExpenses(state.expenses, state.filters)
	};
};

export default connect(mapStateToProps)(ExpenseList);
