'use strict';
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
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
    404 - not found
  </div>
);

const routes = (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact={true} component={ExpenseDashboardPage}/>
      <Route path="/create" component={AddExpensePage}/>
      <Route path="/edit" component={EditExpensePage}/>
      <Route path="/help" component={HelpPage}/>
      <Route component={NotFoundPage}/>
    </Switch>
  </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById('app'));