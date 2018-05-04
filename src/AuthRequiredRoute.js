import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import queryString from 'query-string';


class AuthRequiredRoute extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const query = queryString.parse(this.props.location.search);
    const props = this.props;

    if (!query.auth_key || query.auth_key !== 'auth123456789') {
      return <Redirect to={{
        pathname: `unauthorized`,
        state: { from: props.location },
        search: props.location.search
      }} />
    } else {
      return <Route {...props} />      
    }
  }
}

export default AuthRequiredRoute;