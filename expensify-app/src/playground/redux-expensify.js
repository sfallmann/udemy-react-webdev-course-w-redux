import { createStore, combineReducers } from 'redux';

const demoState = {
  expenses: [{
    id: 'as34324fsdf',
    description: 'January Mortgage',
    note: 'increased due to tax change',
    amount: 120100,
    createdAt: 0
  }],
  filters: {
    text: 'rent',
    sortBy: 'amount', //date or amount
    startDate: undefined,
    endDate: undefined
  }
}