import React from 'react';
import { Router, Switch, Route, Link, NavLink } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import ExpenseDashBoard from '../components/ExpenseDashBoard';
import CreateExpense from '../components/CreateExpense';
import EditExpense from '../components/EditExpense';
import NotFound from '../components/NotFound';
import Login from '../components/LoginPage';
import ProtectedRoute from './ProtectedRoute';
import PublicRoute from './PublicRoute';

export const history = createHistory();

const AppRouter = () => (
	<Router history={history}>
		<div>
			<Switch>
				<PublicRoute path="/" component={Login} exact={true} />
				<ProtectedRoute
					path="/dashboard"
					component={ExpenseDashBoard}
				/>
				<ProtectedRoute path="/create" component={CreateExpense} />
				<ProtectedRoute path="/edit/:id" component={EditExpense} />
				<Route component={NotFound} />
			</Switch>
		</div>
	</Router>
);

export default AppRouter;
