import React from "react";
import { Route, Switch } from "react-router-dom";
import NotFound from './Screens/Containers/NotFound';
import LoginContainer from './Screens/Containers/LoginContainer';
import AgencyContainer from "./Screens/Containers/AgencyContainer";

export default ({ childProps }) =>
    <Switch>
        <Route path='/' exact render={(props) => <LoginContainer {...props} childProps={childProps} />} />
        <Route exact path="/agencies" render={(props) => <AgencyContainer {...props} childProps={childProps} />} />
        <Route component={NotFound} />
    </Switch>;