import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header>
    <h1>Expensify</h1>
    <li>
      <NavLink to="/" activeClassName="is-active" exact={true}>
        Dashboard
      </NavLink>
    </li>
    <li>
      <NavLink to="/create" activeClassName="is-active">
        Create Expense
      </NavLink>
    </li>
    <li>
      <NavLink to="/help" activeClassName="is-active">
        Help Page
      </NavLink>
    </li>
  </header>
);

export default Header;
