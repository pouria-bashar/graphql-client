import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './style.css';

const cx = classNames.bind(styles);

class TextInput extends React.Component {
  state = {
    active: false,
    value: null,
  }
  static propTypes = {
    name: PropTypes.string,
    id: PropTypes.string,
    label: PropTypes.string,
    type: PropTypes.string,
    onChange: PropTypes.func,
  }

  handleChange(e) {
    this.setState({ value: e.target.value });

    const { onChange } = this.props;
    if (onChange) {
      onChange(e);
    }
  }

  render() {
    const {
      name,
      id,
      label,
      type,
    } = this.props;

    const { active } = this.state;
    return (
      <div className={cx({ textInput: true, active })}>
        <input
          id={id}
          type={type}
          name={name}
          autoComplete="new-password"
          onFocus={() => this.setState({ active: true })}
          onClick={() => this.setState({ active: true })}
          onBlur={() => this.setState({ active: !!this.state.value })}
          onChange={this.handleChange.bind(this)}
        />
        <label
          htmlFor={id}
          >{label}
        </label>
      </div>
    );
  }
}
export default TextInput;
