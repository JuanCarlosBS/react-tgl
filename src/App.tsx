import React, { Fragment } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';

import NewBet from './pages/NewBet';
import RecentGames from './pages/RecentGames';
import LogIn from './pages/LogIn';
import Register from './pages/Register';
import ForgotPassword from './pages/ForgotPassword'

function App() {
  return (
    <Fragment>
      <Switch>
        <Route path="/" exact>
          <Redirect to="log-in" />
        </Route>
        <Route path="/log-in">
          <LogIn/>  
        </Route>
        <Route path="/forgot-password">
          <ForgotPassword/>
        </Route>
        <Route path="/register">
          <Register/>
        </Route>
        <Route path="/recent-games">
          <RecentGames/>
        </Route>
        <Route path="/new-bet">
          <NewBet/>
        </Route>
      </Switch>
    </Fragment>
  );
}

export default App;
