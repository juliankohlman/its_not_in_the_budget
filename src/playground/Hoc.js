// A component that renders another component
// code reuse
// render hijacking
// prop manipulation
// abstract state

import React, { Component } from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
  <div>
    <h1>Info</h1>
    <p>The info is: {props.info}</p>
  </div>
);

// create a function that gets called with component to be wrapped
const withAdminWarning = (WrappedComponent) => {
  return props => <div>
			{props.isAdmin && <p>This is private info. Please don't share!</p>}
			<WrappedComponent {...props} />
		</div>;
}

const requireAuthentication = (WrappedComponent) => {
  return props => <div>
    {props.isAuthenticated ? (
      <WrappedComponent {...props} />
    ) : (
      <p>Please login to view this info</p>
    )} 
  </div>
}

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);
ReactDOM.render(<AuthInfo isAuthenticated={true} info="There are the details" />, document.getElementById('app'));
// ReactDOM.render(<AdminInfo isAdmin={true} info="There are the details" />, document.getElementById('app'));
