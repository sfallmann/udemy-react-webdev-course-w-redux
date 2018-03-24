import React from 'react';
import { connect } from 'react-redux';
import { setTextFilter, sortByAmount, sortByDate, setStartDate } from '../actions/filters';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import { DateRangePicker } from 'react-dates';

class ExpenseListFilters extends React.Component{

  state = {
    calendarFocused: null,
  }

  onDatesChange = ({startDate, endDate}) => {
    this.props.dispatch(setStartDate(startDate));
    this.props.dispatch(setEndDate(endDate));
  }

  onFocusChange = (calendarFocused) => {
    this.setState(() => ({calendarFocused}))
  }

  render() {
    return (
      <div>
        <input type="text" value={this.props.filters.text} onChange={(e) => {
          this.props.dispatch(setTextFilter(e.target.value))
        }}/>
        <select value={this.props.filters.sortBy} onChange={(e) => {
          switch(e.target.value) {
            case 'amount':
              this.props.dispatch(sortByAmount());
              break;
            case 'date':
              this.props.dispatch(sortByDate());
              break;
            default:
          }
        }}>}>
          <option value="date">Date</option>
          <option value="amount">Amount</option>
        </select>
        <DateRangePicker
          startDate={this.props.filters.startDate}
          endDate={this.props.filters.endDate}
          onDatesChange={this.onDatesChange}
          focusedInput={this.state.calendarFocused}
          onFocusChange={this.onFocusChange}
          startDateId="expense-filter-start-date"
          endDateId="expense-filter-end-date"
          numberOfMonths={1}
          isOutsideRange={() => false}
          showClearDates={true}
        />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    filters: state.filters
  }
}

export default connect(mapStateToProps)(ExpenseListFilters);