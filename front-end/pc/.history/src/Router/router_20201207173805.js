import React from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom';
import Login from '../login/App';
import Center from '../person-center/Center';
import Logger from '../person-center/Logger'

const BasicRoute = () => (
    <HashRouter>
        <Switch>
            <Route exact path="/" component={Login}/>
            <Route exact path="/center" component={Center}/>
            <Route exact path="/logger" component={Logger}/>
        </Switch>
    </HashRouter>
);


export default BasicRoute;