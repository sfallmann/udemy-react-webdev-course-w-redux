import React from 'react';
import { connect } from 'react-redux';
//import getVisibleExpenses from '../selectors/expenses';

const ExpenseList = (props) => (
  <div>
    <h1>Expense List</h1>
    <ol>
      {props.expenses.map((expense) => (<li key={expense.id}>{expense.description}</li>))}
    </ol>
  </div>
);

const mapStateToProps = (state) => ({...state});

export default connect(mapStateToProps)(ExpenseList);