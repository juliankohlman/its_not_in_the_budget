import React, { Component } from 'react';
import moment from 'moment';
// import 'react-dates/initialize';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';

const now = moment();
console.log(now.format('MMM Do, YYYY'));

export default class ExpenseForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			description: props.expense ? props.expense.description : '',
			note: props.expense ? props.expense.note : '',
			amount: props.expense ? (props.expense.amount / 100).toString() : '',
			createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
			calendarFocused: false,
			recurringExpense: false,
			error: ''
		};
	}

	onFocusChange = ({ focused }) => {
		this.setState(() => ({ calendarFocused: focused }));
	};

	onDateChange = createdAt => {
		if (createdAt) this.setState(() => ({ createdAt }));
	};

	onDescriptionChange = e => {
		const description = e.target.value;
		this.setState(() => ({
			description
		}));
	};

	onRecurringChange = () => {
		const recurring = !this.state.recurringExpense;
		this.setState(() => ({
			recurringExpense: recurring
		}));
	};

	onNoteChange = e => {
		const note = e.target.value;
		this.setState(() => ({
			note
		}));
	};

	onAmountChange = e => {
		const amount = e.target.value;
		if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
			this.setState(() => ({ amount }));
		}
	};

	onSubmit = e => {
		e.preventDefault();

		if (!this.state.description || !this.state.amount) {
			this.setState(() => ({
				error: 'Please submit an expense description and amount.'
			}));
		} else {
			this.setState(() => ({ error: '' }));
			this.props.onSubmit({
				description: this.state.description,
				amount: parseFloat(this.state.amount, 10) * 100,
				createdAt: this.state.createdAt.valueOf(),
				note: this.state.note,
				recurringExpense: this.state.recurringExpense
			});
		}
	};

	render() {
		return (
			<div className="content">
				<form className="form" onSubmit={this.onSubmit}>
					{this.state.error && <p className="form-error">{this.state.error}</p>}
					<input
						className="text-input"
						type="text"
						placeholder="Description"
						autoFocus
						value={this.state.description}
						onChange={this.onDescriptionChange}
					/>
					<input
						className="text-input"
						value={this.state.amount}
						type="text"
						placeholder="Amount"
						onChange={this.onAmountChange}
					/>
					<SingleDatePicker
						className="text-input"
						date={this.state.createdAt}
						onDateChange={this.onDateChange}
						focused={this.state.calendarFocused}
						onFocusChange={this.onFocusChange}
						numberOfMonths={1} // makes current day and any day in the past available
						isOutsideRange={() => false}
					/>
					<textarea
						className="textarea"
						value={this.state.note}
						onChange={this.onNoteChange}
						placeholder="Add a note for your expense(optional)"
					/>
					<p className="recurring-label">Recurring Expense?</p>
					<label className="rocker rocker-small">
						<input
							type="checkbox"
							value={this.state.recurringExpense}
							onClick={this.onRecurringChange}
						/>
						<span className="switch-left">Yes</span>
						<span className="switch-right">No</span>
					</label>
				</form>
				<button className="button" onClick={this.onSubmit}>
					Save Expense
				</button>
			</div>
		);
	}
}
