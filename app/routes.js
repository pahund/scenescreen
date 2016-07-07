import React from "react";
import { Route, IndexRoute } from "react-router";
import App from "./components/App";
import Home from "./containers/Home";
import Preferences from "./containers/Preferences";

export default (
    <Route path="/" component={App}>
        <IndexRoute component={Home} />
        <Route path="/preferences" component={Preferences} />
    </Route>
);
