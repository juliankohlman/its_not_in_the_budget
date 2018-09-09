import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';

export const Login = ({ startLogin }) => {
	return (
		<div className="layout">
			<div className="login-layout">
				<h1 className="login-title">It's Not In The Budget</h1>
				<p>
					Wealth consists not in having great possessions, but in
					having few wants. ...
				</p>
				<button className="button" onClick={startLogin}>
					Login with Google
				</button>
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
