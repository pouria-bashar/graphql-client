import React from 'react';
import styles from './style.css';
import PropTypes from 'prop-types';
import { graphql, compose } from 'react-apollo';
import { mutations } from '_graphql';
import {
  TextInput,
  Button,
} from 'components';

const INITIAL_STATE = {
  email: undefined,
  password: undefined,
  firstName: undefined,
  lastName: undefined,
};

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = INITIAL_STATE;
    this.onSubmit = this.onSubmit.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    const { signup } = this.props;
    const {
      email,
      password,
      firstName,
      lastName,
    } = this.state;

    signup({
      variables:
      {
        email,
        password,
        firstName,
        lastName,
      },
    });
  }

  render() {
    return (
      <div className={styles.container}>
        <center>
          <form onSubmit={this.onSubmit}>
            <h3>Signup</h3>
            <div className={styles.inputs}>
              <TextInput
                name="firstName"
                id="firstName"
                label="First Name"
                onChange={this.onInputChange}
              />
              <TextInput
                name="lastName"
                id="lastName"
                label="Last Name"
                onChange={this.onInputChange}
              />
              <TextInput
                name="email"
                id="email"
                label="Email"
                onChange={this.onInputChange}
              />
              <TextInput
                name="password"
                id="password"
                label="Password"
                type="password"
                onChange={this.onInputChange}
              />
              <TextInput
                name="confirmPassword"
                id="confirmPassword"
                label="Confirm Password"
                type="password"
                onChange={this.onInputChange}
              />
            </div>
            <Button
              label="Signup"
              icon="send"
            />
          </form>
        </center>
      </div>
    );
  }
}

Signup.propTypes = {
  signup: PropTypes.func.isRequired,
};
export default compose(graphql(mutations.signup, { name: 'signup' }))(Signup);
