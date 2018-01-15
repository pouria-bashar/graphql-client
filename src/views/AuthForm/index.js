import React from 'react';
import styles from './style.css';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { Login, Signup } from 'views';
import { Redirect } from 'react-router-dom';

const cx = classNames.bind(styles);

class AuthForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
    };
    this.renderContent = this.renderContent.bind(this);
  }
  renderContent() {
    const { activeIndex } = this.state;
    switch (activeIndex) {
      case 0:
        return <Login />;
      case 1:
        return <Signup />;
      default:
      return <Login />;
    }
  }
  render() {
    const { activeIndex } = this.state;
    const { isAuthenticated, location } = this.props;
    const { from } = location.state || { from: { pathname: '/' } };
    if (isAuthenticated) {
      return <Redirect to={from} />;
    }
    return (
      <div className={styles.container}>
        <div className={styles.tabs}>
          <button
            className={cx({ active: activeIndex === 0 })}
            onClick={() => this.setState({ activeIndex: 0 })}
          >Login
          </button>
          <button
            className={cx({ active: activeIndex === 1 })}
            onClick={() => this.setState({ activeIndex: 1 })}
          >Signup
          </button>
        </div>
        <div className={styles.content}>
          {this.renderContent()}
        </div>
      </div>
    );
  }
}
AuthForm.propTypes = {
  isAuthenticated: PropTypes.bool,
  location: PropTypes.object,
};
export default AuthForm;
