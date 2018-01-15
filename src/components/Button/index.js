import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './style.css';

const cx = classNames.bind(styles);

class Button extends React.Component {
  static propTypes = {
    name: PropTypes.string,
    id: PropTypes.string,
    label: PropTypes.string,
    type: PropTypes.string,
    icon: PropTypes.string,
    primary: PropTypes.bool,
  }
  static defaultProps = {
    primary: true,
  };
  render() {
    const {
      name,
      id,
      label,
      type,
      icon,
      primary,
    } = this.props;

    return (
      <button
        className={cx({ button: true, primary })}
        type={type}
        name={name}
        id={id}
      >{label}
        {icon && <i className="material-icons">{icon}</i>}
      </button>
    );
  }
}
export default Button;
