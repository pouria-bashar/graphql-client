import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Route,
  Redirect,
} from 'react-router-dom';

class PrivatePath extends Component {
  constructor(props) {
    super(props);
    this.renderRoute = this.renderRoute.bind(this);
  }

  renderRoute(routerProps) {
    const { component, isAuthenticated } = this.props;
    const routeComponent = React.createElement(component, routerProps);
    if (!isAuthenticated) {
      return (
        <Redirect
          to={{
          pathname: '/login',
          state: { from: routerProps.location },
        }}
        />
      );
    }
    return routeComponent;
  }
  render() {
    const { component, ...rest } = this.props;
    return (
      <Route
        {...rest}
        render={this.renderRoute}
      />
    );
  }
}
PrivatePath.propTypes = {
  component: PropTypes.any.isRequired,
  isAuthenticated: PropTypes.bool,
};
export default PrivatePath;
