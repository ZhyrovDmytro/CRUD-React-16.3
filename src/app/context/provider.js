import React, { Component } from 'react';

import PropTypes from 'prop-types';

import MyContext from './index';

class MyProvider extends Component {
    state = {
        users: [],
        mainPage: '',
    };

    componentWillMount() {
        this.setState({
            users: JSON.parse(localStorage.getItem('users')) || [],
        });
    }

    render() {
        return (
            <MyContext.Provider
                value={{
                    state: this.state.users,
                    updateUsersList: () => this.setState({
                        users: JSON.parse(localStorage.getItem('users')),
                    }),
                    changePage: () => this.setState({
                        mainPage: !this.state.mainPage,
                    }, () => {
                        this.state.mainPage;
                    }),
                    mainPage: this.state.mainPage,
                }}

            >
                {this.props.children}
            </MyContext.Provider>
        );
    }
}

MyProvider.propTypes = {
    children: PropTypes.object.isRequired,
};

export default MyProvider;
