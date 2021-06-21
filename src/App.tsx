import React, { Fragment } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';

import NewBet from './pages/NewBet';
import RecentGames from './pages/RecentGames';
import LogIn from './pages/LogIn';
import Register from './pages/Register';
import ForgotPassword from './pages/ForgotPassword'
import AccountPage from './pages/AccountPage'
import NewPassword from './pages/NewPassword'

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
          <Route path="/recent-games/:userId">
            <RecentGames/>
          </Route>
          <Route path="/new-bet/:userId">
            <NewBet/>
          </Route>
          <Route path="/user/:userId">
            <AccountPage />
          </Route>
          < Route path="/new-password/:token">
            <NewPassword/>
          </Route>
        </Switch>
      </Fragment>
  );
}

export default App;
