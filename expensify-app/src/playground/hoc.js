import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
  <div>
    <h1>Info</h1>
    <p>The info is {props.info}</p>
  </div>
);

const withAdminWarning = (WrappedComponent) => {
  return (props) => (
    <div>

      {props.isAdmin && <p>This is private info!</p>}
      <WrappedComponent test="value" {...props}/>
    </div>
  )
}

const requireAuthentication = (WrappedComponent) => {
  return (props) => (
    <div>
      {props.isAuthenticated ? <WrappedComponent /> : <p>Please login!</p>}
    </div>
  )
}

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);

//ReactDOM.render(<AdminInfo isAdmin={true} info='DETAILS!'/>, document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuthenticated={false} info='DETAILS!'/>, document.getElementById('app'));