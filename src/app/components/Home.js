import React, { Component } from 'react';

import MyContext from '../context/index';

class Home extends Component {
    render() {
        return (
            <div>
                <h1>Users List</h1>
                <MyContext.Consumer>
                    {context => (
                        <p>
                            {/* {console.log(context.state)} */}
                            Hello world
                        </p>
                    )}
                </MyContext.Consumer>
            </div>
        );
    }
}

export default Home;
