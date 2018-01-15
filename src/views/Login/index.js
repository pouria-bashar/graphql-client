import React from 'react';
import styles from './style.css';
import PropTypes from 'prop-types';
import { graphql, compose } from 'react-apollo';
import { mutations } from '_graphql';
import {
  TextInput,
  Button,
} from 'components';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    const { login } = this.props;
    const { username, password } = this.state;
    login(username, password);
  }

  render() {
    return (
      <div className={styles.container}>
        <center>
          <form onSubmit={this.onSubmit}>
            <h3>Login</h3>
            <div className={styles.inputs}>
              <TextInput
                id="username"
                label="Username"
                onChange={this.onInputChange}
              />
              <TextInput
                id="password"
                label="Password"
                type="password"
                onChange={this.onInputChange}
              />
            </div>
            <Button
              label="Login"
              icon="send"
            />
          </form>
        </center>
      </div>
    );
  }
}

Login.propTypes = {
  login: PropTypes.func.isRequired,
};
export default compose(graphql(mutations.login, { name: 'login' }))(Login);
