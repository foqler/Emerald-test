import React, { PropTypes } from 'react';
import InputField from '../utils/inputField';

export default class SignInForm extends React.Component {
  static propTypes = {
    submitting: PropTypes.bool.isRequired,
    handleSubmit: PropTypes.func.isRequired,
  }

  render() {
    const {
      submitting,
      handleSubmit,
    } = this.props;

  return (
      <div className="table">
        <form onSubmit={handleSubmit}>
          <label>Email</label>
            <InputField
              name="email"
              type="email"
              placeholder="Логин"
              disabled={submitting}
            />
          <label>Password</label>
            <InputField
              name="password"
              type="password"
              placeholder={'password'}
              disabled={submitting}
            />
          <label>
            <button
              disabled={submitting}
              onClick={handleSubmit}
            >Login</button>
          </label>
        </form>
      </div>
    );
  }
}
