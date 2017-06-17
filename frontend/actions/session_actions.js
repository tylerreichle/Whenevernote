import * as SessionAPI from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';

export const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser,
});

export const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors,
});

export const clearErrors = () => ({
  type: CLEAR_ERRORS,
});

export const signup = user => dispatch => (
  SessionAPI.signup(user)
    .then((newUser) => {
      dispatch(receiveCurrentUser(newUser));
      dispatch(clearErrors());
    },
    (errors => dispatch(receiveErrors(errors.responseJSON))))
);

export const signin = user => dispatch => (
  SessionAPI.signin(user)
    .then((signedInUser) => {
      dispatch(receiveCurrentUser(signedInUser));
      dispatch(clearErrors());
    },
    (errors => dispatch(receiveErrors(errors.responseJSON))))
);

export const signout = () => dispatch => (
  SessionAPI.signout()
    .then(() => {
      dispatch(receiveCurrentUser(null));
      dispatch(clearErrors());
    },
    (errors => dispatch(receiveErrors(errors.responseJSON))))
);
