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
                    users: this.state.users,
                    deleteUser: (id) => {
                        const storedUsers = JSON.parse(localStorage.getItem('users'));
                        const newUserList = storedUsers.filter(el => el.id !== id);

                        this.setState({
                            users: this.state.users.filter(el => el.id !== id),
                        });

                        localStorage.setItem('users', JSON.stringify(newUserList));
                    },
                    correctUserData: (correctedUser) => {
                        const storedUsers = JSON.parse(localStorage.getItem('users'));

                        storedUsers[storedUsers.findIndex(el => el.id === correctedUser.id)] = correctedUser;

                        this.setState({
                            users: storedUsers,
                        });
                        localStorage.setItem('users', JSON.stringify(storedUsers));
                    },
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
