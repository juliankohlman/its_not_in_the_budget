import React from 'react'
import { connect } from 'react-redux';
import { removeExpense } from '../actions/expenses';

const ExpenseListItem = ({ dispatch, id, description, amount, createdAt }) => (
    <div>
        <h3>Description: {description}</h3> 
        <p>Amount: ${amount}</p>
        <p>CreatedAt: {createdAt}</p>
        <button onClick={() => 
          dispatch(removeExpense({id}))
        }>
          Remove
        </button>
        < hr/>
    </div>
  )

export default connect()(ExpenseListItem);
