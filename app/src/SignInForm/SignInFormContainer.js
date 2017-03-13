import { compose } from 'redux';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { signIn } from '../actions/authorization';

import SignInForm from './SignInForm';

export default compose(
  connect(
    null,
    dispatch => ({
      onSubmit: ({ email, password }) => dispatch(signIn(email, password)),
    }),
  ),
  reduxForm({
    form: 'SignInForm',
    validate: ({ email, password }) => {
      const errors = {};

      if (!email) {
        errors.email = 'Login is required';
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
        errors.email = 'Invalid email address'
      }

      if (!password) {
        errors.password = 'Password is required';
      }

      return errors;
    },
  }),
)(SignInForm);
