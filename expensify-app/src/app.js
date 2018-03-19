'use strict';
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch, NavLink} from 'react-router-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const ExpenseDashboardPage = () => (
  <div>
    ExpenseDashboardPage Component
  </div>
);

const AddExpensePage = () => (
  <div>
    AddExpensePage Component
  </div>
);

const EditExpensePage = () => (
  <div>
    EditExpensePage Component
  </div>
);

const HelpPage = () => (
  <div>
    HelpPage Component
  </div>
);

const NotFoundPage = () => (
  <div>
    <p>404 - not found</p>
    <Link to="/">Go Home</Link>
  </div>
);

const Header = () => (
  <header>
    <h1>Expensify</h1>
    <div>
      <span><NavLink to="/" activeClassName="is-active" exact={true}> Dashboard </NavLink></span>
      <span><NavLink to="/create" activeClassName="is-active"> Create Expense </NavLink></span>
      <span><NavLink to="/edit" activeClassName="is-active"> Edit Expense </NavLink></span>
      <span><NavLink to="/help" activeClassName="is-active"> Help </NavLink></span>
    </div>
  </header>
)

const routes = (
  <BrowserRouter>
    <div>
      <Header/>
      <Switch>
        <Route path="/" exact={true} component={ExpenseDashboardPage}/>
        <Route path="/create" component={AddExpensePage}/>
        <Route path="/edit" component={EditExpensePage}/>
        <Route path="/help" component={HelpPage}/>
        <Route component={NotFoundPage}/>
      </Switch>      
    </div>
  </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById('app'));