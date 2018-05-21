import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route, NavLink, Link } from 'react-router-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const ExpenseDashBoard = () => <div>My ExpenseDashBoard component</div>;

const AddExpense = () => <div>My AddExpense component</div>;

const EditExpense = () => (<div><p>My EditExpense component</p></div>);

const HelpExpense = () => (<div><p>Stateless help page component</p></div>);

const NotFoundPage = () => (
  <div>
    404! - <Link to="/">Home page</Link>
  </div>
);

const Header = () => (
  <header>
    <h1>Expensify</h1>
    <li><NavLink to="/" activeClassName="is-active" exact={true}>Home</NavLink></li>
    <li><NavLink to="/create" activeClassName="is-active">Create Expense</NavLink></li>
    <li><NavLink to="/edit" activeClassName="is-active">Edit Expense</NavLink></li>
    <li><NavLink to="/help" activeClassName="is-active">Help Page</NavLink></li>
  </header>
);

const routes = (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={ExpenseDashBoard} exact={true} />
        <Route path="/create" component={AddExpense} />
        <Route path="/edit" component={EditExpense} />
        <Route path="/help" component={HelpExpense} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);
// props => stateless functional component
// this.props => class based component
ReactDOM.render(routes, document.getElementById('app'));
