import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogout } from '../actions/auth';

const Header = ({ startLogout }) => (
	<header className="header">
		<div className="content">
			<div className="header-content">
				<Link className="header-title" to="/dashboard">
					<h1>It's not in the budget!</h1>
					{/* ADD LOGO HERE and replace h1 text */}
					{/* <img src="https://via.placeholder.com/150" alt="" /> */}
				</Link>

				<button className="button button--link" onClick={startLogout}>
					Logout
				</button>
			</div>
		</div>
	</header>
);

const mapDispatchToProps = dispatch => ({
	startLogout: () => dispatch(startLogout())
});

export default connect(
	undefined,
	mapDispatchToProps
)(Header);
