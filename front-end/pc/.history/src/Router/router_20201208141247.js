import React from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom';
import Login from '../login/App';
import Center from '../person-center/Center';
import Search from '../search/search'

const BasicRoute = () => (
    <HashRouter>
        <Switch>
            <Route exact path="/" component={Login}/>
            <Route exact path="/center" component={Center}/>
            <Route exact path="/search" component={Search}/>
        </Switch>
    </HashRouter>
);


export default BasicRoute;