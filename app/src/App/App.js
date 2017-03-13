import React, { PropTypes } from 'react';
import { SignInFormContainer } from '../SignInForm';

export default class App extends React.Component {
  static propTypes = {
    children: PropTypes.node,
  }

  render() {
    return (
      this.props.children
    )
  }
}
