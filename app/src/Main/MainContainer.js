import { compose } from 'redux';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { signIn } from '../actions/authorization';

import Main from './Main';

export default compose(
  connect(
    (state) => (console.log(state, "STATE13131313"),{
      tokenDate: state.authorization.api_token_expiration_date,
    }),
    {},
    (stateProps, dispatchProps, parentProps) => ({
      ...stateProps,
      ...dispatchProps,
      ...parentProps,
    }),
  ),
)(Main);
