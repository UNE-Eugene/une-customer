import React from 'react';
import {HashRouter, Route, Switch, Redirect} from 'react-router-dom';
import Login from '../login/App';
import Center from '../person-center/Center';
import Search from '../search/search'
import Result from '../result/result'

const BasicRoute = () => (
    <HashRouter>
        <Switch>
            <Route exact path="/" component={Login}/>
            <Route exact path="/center" component={Center}/>
            <Route exact path="/search" component={Search}/>
            <Route exact path="/result" component={Result}/>
        </Switch>
    </HashRouter>
);


export default BasicRoute;