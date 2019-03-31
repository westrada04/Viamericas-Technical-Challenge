import React from "react";
import { Route, Switch } from "react-router-dom";
import NotFound from './Screens/Containers/NotFound';

export default () =>
    <Switch>
        <Route component={NotFound} />
    </Switch>;