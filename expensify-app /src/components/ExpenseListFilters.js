import React from 'react';
import { connect } from 'react-redux';
import { DateRangePicker } from 'react-dates';
import {
	setTextFilter,
	sortByDate,
	sortByAmount,
	setStartDate,
	setEndDate
} from '../actions/filters';

class ExpenseListFilters extends React.Component {
	constructor(props) {
		super(props);
		state = {
			calendarFocused: null
		};
	}

	onDatesChange = ({ startDate, endDate }) => {
		this.props.dispatch(setStartDate(startDate));
		this.props.dispatch(setEndDate(endDate));
	};

	onFocusChange = calendarFocused => {
		this.setState(() => ({ calendarFocused }));
	};
	render() {
		return (
			<div>
				<input
					type="text"
					value={props.filters.text}
					onChange={event => {
						props.dispatch(setTextFilter(event.target.value));
					}}
				/>
				<select
					value={props.filters.sortBy}
					onChange={e => {
						e.target.value === 'date'
							? props.dispatch(sortByDate())
							: props.dispatch(sortByAmount());
					}}
				>
					<option value="date">Date</option>
					<option value="amount">Amount</option>
				</select>
				<DateRangePicker
					startDate={this.props.filters.startDate}
					endDate={this.props.filters.endDate}
					onDatesChange={this.onDatesChange}
					focusedInput={this.state.calendarFocused}
					onFocusChange={this.onFocusChange}
				/>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		filters: state.filters
	};
};

export default connect(mapStateToProps)(ExpenseListFilters);
