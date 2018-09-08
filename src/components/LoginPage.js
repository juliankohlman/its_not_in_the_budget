import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';

export const Login = ({ startLogin }) => {
	return (
		<div className="layout">
			<div className="login-layout">
				<h1>It's Not In The Budget</h1>
				<p>
					Wealth consists not in having great possessions, but in
					having few wants. ...
				</p>
				<button onClick={startLogin}>Login</button>
			</div>
		</div>
	);
};

const mapDispatchToProps = dispatch => ({
	startLogin: () => dispatch(startLogin())
});

export default connect(
	undefined, // undefined for mapStateToProps()
	mapDispatchToProps
)(Login);
