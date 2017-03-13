import { browserHistory } from 'react-router';

const actions = {
  CUSTOMER_API_TOKEN: (dispatch, action) => {
    if (action.data.api_token_expiration_date) {
      const diff = new Date() - new Date(action.data.api_token_expiration_date);

      if (diff < 0) {
        dispatch({
          type: 'LOGIN_SUCCESS',
          data: action.data,
        });
        browserHistory.push('/main');
      }
    }
  }
}

export const signIn = (email, password) => {
  return (dispatch) => {
    const websocket = new WebSocket('ws://52.29.182.220:8080/customer-gateway/customer');
    websocket.onopen = (event) => {
      websocket.send(JSON.stringify({
        "type": "LOGIN_CUSTOMER",
        "sequence_id": "a29e4fd0­581d­e06b­c837­4f5f4be7dd18",
        "data": {
          "email": email,
          "password": password,
        }
      }))

      websocket.onmessage = (message) => {
        const messageJson = JSON.parse(message.data);

        if (actions[messageJson.type]) {
          actions[messageJson.type](dispatch, {
            type: messageJson.type,
            data: {...messageJson.data},
          })
        }
      };
    };
  };
}
