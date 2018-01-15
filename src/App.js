import React from 'react';
import styles from './App.css';
import PropTypes from 'prop-types';
import { AuthForm } from 'views';
import { graphql, compose } from 'react-apollo';
import { queries } from '_graphql';
import { isEmpty } from 'lodash';
import { PrivatePath } from 'components';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

class App extends React.Component {
  render() {
    const { user, loading } = this.props.data;
    const isAuthenticated = !isEmpty(user);

    if (loading) return <div>Loading....</div>;
    return (
      <Router>
        <div className={styles.app}>
          <main>
            <Switch>
              <Route
                exact
                path="/login"
                render={(props) => (
                  <AuthForm
                    {...props}
                    isAuthenticated={isAuthenticated}
                  />
                )}
              />
              <PrivatePath
                exact
                path="/"
                isAuthenticated={isAuthenticated}
                component={() => <div>Logged in as {user.email}</div>}
              />
            </Switch>
          </main>
        </div>
      </Router>
    );
  }
}

App.propTypes = {
  data: PropTypes.object,
  loading: PropTypes.bool,
};
export default compose(graphql(queries.currentUser))(App);
