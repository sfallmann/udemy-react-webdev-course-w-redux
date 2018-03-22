import React from 'react';
import { connect } from 'react-redux';
import { setTextFilter, sortByAmount, sortByDate } from '../actions/filters'

const ExpenseListFilters = ({filters, dispatch}) => (
  <div>
    <input type="text" value={filters.text} onChange={(e) => {
      dispatch(setTextFilter(e.target.value))
    }}/>
    <select value={filters.sortBy} onChange={(e) => {
      switch(e.target.value) {
        case 'amount':
          dispatch(sortByAmount());
          break;
        case 'date':
          dispatch(sortByDate());
          break;
        default:
      }
    }}>}>
      <option value="date">Date</option>
      <option value="amount">Amount</option>
    </select>
  </div>
)

const mapStateToProps = (state) => {
  return {
    filters: state.filters
  }
}

export default connect(mapStateToProps)(ExpenseListFilters);