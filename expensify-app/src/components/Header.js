import React from 'react';
import {NavLink} from 'react-router-dom';

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

export default Header;