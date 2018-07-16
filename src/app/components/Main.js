import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import CreateUser from './CreateUser';
import Home from './Home';

class Main extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/CreateUser" component={CreateUser} />
            </Switch>
        );
    }
}

export default Main;
