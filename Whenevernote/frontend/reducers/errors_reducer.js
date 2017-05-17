import { RECEIVE_ERRORS } from '../actions/session_actions';

const ErrorsReducer = (state = [], action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_ERRORS:
      return [...action.errors];

    default:
      return state;
  }
};

export default ErrorsReducer;
