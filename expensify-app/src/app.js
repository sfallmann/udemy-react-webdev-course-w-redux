'use strict';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense, editExpense, removeExpense } from './actions/expenses';
import { setTextFilter, setStartDate, setEndDate, sortByDate, sortByAmount } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store = configureStore();


store.dispatch(addExpense({description: 'Gas Bill', amount: 6700}));
store.dispatch(addExpense({description: 'Water Bill', amount: 12000}))
store.dispatch(addExpense({description: 'Rent', amount: 3000, createdAt: 1000}))
const state = store.getState()

const jsx = (
  <Provider store={store}>
    <AppRouter/>
  </Provider>
)

ReactDOM.render(jsx, document.getElementById('app'));