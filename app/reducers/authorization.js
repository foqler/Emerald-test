const authorization = (state = {}, action) => {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      return action.data;
      break;
    default:
      return state;
  }
}


export default authorization;
