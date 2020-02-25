import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import UpdateUser from './pages/UpdateUser';
import DeleteUser from './pages/DeleteUser';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/signin" component={SignIn} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/updateuser" component={UpdateUser} />
        <Route exact path="/deleteuser" component={DeleteUser} />
      </Switch>
    </BrowserRouter>
  );
}
