import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogout } from '../actions/auth';

const Header = () => (
	<header>
		<h1>It's not in the budget!</h1>
		<li>
			<NavLink to="/dashboard" activeClassName="is-active" exact={true}>
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
		<button>Logout</button>
	</header>
);

const mapDispatchToProps = dispatch => ({
	startLogout: () => dispatch(startLogout)
});

export default connect(
	undefined,
	mapDispatchToProps
)(Header);
