import React, { PropTypes } from 'react';
import moment from 'moment';

export default class Main extends React.Component {
  render() {
    const {
      theme,
      tokenDate,
    } = this.props;

  return (
      <div>
        <div>Вы авторизованы!</div>
        <div>Время истечения срока действия токена - {moment(tokenDate).format('YYYY-MM-DD hh:mm:ss')}</div>
      </div>
    );
  }
}
