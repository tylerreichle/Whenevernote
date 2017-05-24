import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute, } from '../../util/route_util';

import SplashPage from './splash_page';
import Notes from '../notes/notes';
import Notebooks from '../notebooks/notebooks';


class Home extends React.Component {
  render() {
    return (
      <div className="home-container">
        <AuthRoute path="/" component={SplashPage} />
        <ProtectedRoute path="/notes" component={Notes} />
        <ProtectedRoute path="/notebook" component={Notebooks} />
      </div>
    );
  }
}

export default Home;
