import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

const ExpenseListItem = ({ id, description, amount, createdAt }) => (
	<div>
		<Link to={`/edit/${id}`}>
			<h3>Description: {description}</h3>
		</Link>
		<p>Amount: ${amount}</p>
		<p>Expense created: {moment(createdAt).format('MMMM Do, YYYY')}</p>

		<hr />
	</div>
);

export default ExpenseListItem;
