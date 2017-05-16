import React from 'react';
import ReactDom from 'react-dom';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  ReactDom.render(<h1>Whenevernote</h1>, root);
});

import * as APIUtil from './util/session_api_util';

window.signup = APIUtil.signup;
window.signin = APIUtil.signin;
window.signout = APIUtil.signout;
