import React from 'react';
import { Switch, Route } from 'react-router-dom';
import CreateUser from './CreateUser';
import Home from './Home';

const Main = () => (
    <div>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/CreateUser" component={CreateUser} />
        </Switch>
    </div>
);

export default Main;
