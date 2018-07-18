import React from 'react';

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import MyContext from '../context/index';

import UserItem from './UserItem';

const Home = () => (
    <div>
        <h1>Users List</h1>
        <MyContext.Consumer>
            {context => (
                context.users.length === 0
                    ? (
                        <Paper elevation={3} className="Create__userItem">
                            <Typography variant="headline" component="h3">
                            No users to show!
                            </Typography>
                        </Paper>
                    )
                    : context.users.map(user => (
                        <div
                            key={user.id}
                        >
                            <UserItem
                                user={user}
                            />
                        </div>
                    ))
            )}
        </MyContext.Consumer>
    </div>
);

export default Home;
