import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const ExpenseDashBoard = () => <div>My ExpenseDashBoard component</div>;

const AddExpense = () => <div>My AddExpense component</div>;

const EditExpense = () => (<div><p>My EditExpense component</p></div>);

const HelpExpense = () => (<div><p>Stateless help page component</p></div>);

const NotFoundPage = () => (<div><p>404! This is not the page you are looking for</p></div>);


const routes = (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={ExpenseDashBoard} exact={true} />
      <Route path="/create" component={AddExpense} />
      <Route path="/edit" component={EditExpense} />
      <Route path="/help" component={HelpExpense} />
      <Route component={NotFoundPage} />
    </Switch>
  </BrowserRouter>
);
// props => stateless functional component
// this.props => class based component
ReactDOM.render(routes, document.getElementById('app'));
