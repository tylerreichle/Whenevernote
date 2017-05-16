import * as SessionAPI from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';

export const receiveCurrentUser = user => ({
  type: RECEIVE_CURRENT_USER,
  user
});

export const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors
});

export const signup = user => dispatch => (
  SessionAPI.signup(user)
    .then(newUser => dispatch(receiveCurrentUser(newUser)),
    (errors => dispatch(receiveErrors(errors))))
);

export const signin = user => dispatch => (
  SessionAPI.signin(user)
    .then(signedInUser => dispatch(receiveCurrentUser(signedInUser)),
    (errors => dispatch(receiveErrors(errors))))
);

export const signout = dispatch => (
  SessionAPI.signout()
    .then(signedOut => dispatch(receiveCurrentUser(null)),
    (errors => dispatch(receiveErrors(errors))))
);
