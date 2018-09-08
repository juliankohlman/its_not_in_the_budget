import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';

export const Login = ({ startLogin }) => {
	return (
		<div className="layout">
			<h1>Login Page Component</h1>
			<button onClick={startLogin}>Login to account</button>
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
