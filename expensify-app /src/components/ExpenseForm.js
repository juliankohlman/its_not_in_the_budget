import React, { Component } from 'react';
import moment from 'moment';
// import 'react-dates/initialize';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';

const now = moment();
console.log(now.format('MMM Do, YYYY'));

export default class ExpenseForm extends Component {
	state = {
		description: '',
		note: '',
		amount: '',
		createdAt: moment(),
		calendarFocused: false
	};

	onFocusChange = ({ focused }) => {
		this.setState(() => ({
			calendarFocused: focused
		}));
	};

	onDateChange = createdAt => {
		this.setState(() => {
			createdAt;
		});
	};

	onDescriptionChange = e => {
		const description = e.target.value;
		this.setState(() => ({
			description
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
		if (amount.match(/^\d*(\.\d{0,2})?$/)) {
			this.setState(() => ({ amount }));
		}
	};

	render() {
		return (
			<div>
				<form>
					<input
						type="text"
						placeholder="Description"
						autoFocus
						value={this.state.description}
						onChange={this.onDescriptionChange}
					/>
					<input
						value={this.state.amount}
						type="text"
						placeholder="Amount"
						onChange={this.onAmountChange}
					/>
					<SingleDatePicker
						date={this.state.createdAt}
						onDateChange={this.onDateChange}
						focused={this.state.calendarFocused}
						onFocusChange={this.onFocusChange}
					/>
					<textarea
						value={this.state.note}
						onChange={this.onNoteChange}
						placeholder="Add a note for your expense(optional)"
					/>
				</form>
				<button>Add Expense</button>
			</div>
		);
	}
}
