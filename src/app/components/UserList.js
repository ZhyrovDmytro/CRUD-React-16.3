import React, { Component } from 'react';

import UserItem from './UserItem';

class UserList extends Component {
    componentDidMount() {
        this.userList = localStorage.getItem('UserList') || [];
    }

    render() {
        const createUsers = this.userList.map(user =>
            (
                <div
                    key={`_${user.id}`}
                >
                    <UserItem user={user} />
                </div>
            ),
        );

        return (
            <div>
                {createUsers}
            </div>
        );
    }
}

export default UserList;
