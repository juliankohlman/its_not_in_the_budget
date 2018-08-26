import React from 'react';
import { Link } from 'react-router-dom';

const ExpenseListItem = ({ id, description, amount, createdAt }) => (
	<div>
		<Link to={`/edit/${id}`}>
			<h3>Description: {description}</h3>
		</Link>
		<p>Amount: ${amount}</p>
		<p>CreatedAt: {createdAt}</p>

		<hr />
	</div>
);

export default ExpenseListItem;
