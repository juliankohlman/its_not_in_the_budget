import React from 'react';
import { Router, Switch, Route, Link, NavLink } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import ExpenseDashBoard from '../components/ExpenseDashBoard';
import CreateExpense from '../components/CreateExpense';
import EditExpense from '../components/EditExpense';
import Help from '../components/Help';
import NotFound from '../components/NotFound';
import Login from '../components/LoginPage';
import ProtectedRoute from './ProtectedRoute';

export const history = createHistory();

const AppRouter = () => (
	<Router history={history}>
		<div>
			<Switch>
				<Route path="/" component={Login} exact={true} />
				<ProtectedRoute
					path="/dashboard"
					component={ExpenseDashBoard}
				/>
				<ProtectedRoute path="/create" component={CreateExpense} />
				<ProtectedRoute path="/edit/:id" component={EditExpense} />
				<Route path="/help" component={Help} />
				<Route component={NotFound} />
			</Switch>
		</div>
	</Router>
);

export default AppRouter;
