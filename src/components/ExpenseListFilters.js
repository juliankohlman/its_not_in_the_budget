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
	state = {
		calendarFocused: null
	};

	onDatesChange = ({ startDate, endDate }) => {
		this.props.dispatch(setStartDate(startDate));
		this.props.dispatch(setEndDate(endDate));
	};

	onFocusChange = calendarFocused => {
		this.setState(() => ({ calendarFocused }));
	};
	render() {
		return (
			<div className="content">
				<div className="input-group">
					<div className="input-item">
						<input
							type="text"
							value={this.props.filters.text}
							onChange={event => {
								this.props.dispatch(
									setTextFilter(event.target.value)
								);
							}}
						/>
					</div>
					<div className="input-item">
						<select
							value={this.props.filters.sortBy}
							onChange={e => {
								e.target.value === 'date'
									? this.props.dispatch(sortByDate())
									: this.props.dispatch(sortByAmount());
							}}
						>
							<option value="date">Date</option>
							<option value="amount">Amount</option>
						</select>
					</div>
					<div className="input-item">
						<DateRangePicker
							startDate={this.props.filters.startDate}
							endDate={this.props.filters.endDate}
							onDatesChange={this.onDatesChange}
							focusedInput={this.state.calendarFocused}
							onFocusChange={this.onFocusChange}
							showClearDates={true}
							numberOfMonths={1}
							isOutsideRange={() => false}
						/>
					</div>
				</div>
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
