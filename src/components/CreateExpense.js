import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { startAddExpense } from '../actions/expenses';

export class CreateExpense extends React.Component {
	onSubmit = expense => {
		this.props.startAddExpense(expense);
		this.props.history.push('/');
	};
	render() {
		return (
			<div>
				<div className="page-header">
					<div className="content">
						<h1 className="page-header-title">Add an Expense</h1>
					</div>
				</div>
				<ExpenseForm onSubmit={this.onSubmit} />
			</div>
		);
	}
}

const mapDispatchToProps = dispatch => ({
	startAddExpense: expense => dispatch(startAddExpense(expense))
});

export default connect(
	undefined,
	mapDispatchToProps
)(CreateExpense);
