import React, { Component } from 'react';

import PropTypes from 'prop-types';

import AppBar from '@material-ui/core/AppBar';

import Toolbar from '@material-ui/core/Toolbar';

import Typography from '@material-ui/core/Typography';

import { withStyles } from '@material-ui/core/styles';

import ContainedButtons from './buttons/Button';


const styles = {
    root: {
        flexGrow: 1,
    },
    flex: {
        flex: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
};

class Header extends Component {
    state = {
        page: 'main',
        route: '/CreateUser',
    };

    changeRoute = () => {
        if (this.state.page === 'main' && this.state.route === '/CreateUser') {
            this.setState({
                route: '/',
                page: 'create',
            });
        } else if (this.state.page === 'create' || (this.state.page === 'main' && this.state.route === '/')) {
            this.setState({
                route: '/CreateUser',
                page: 'main',
            });
        }
    }

    render() {
        const { classes } = this.props;

        return (
            <div className={classes.root}>
                <AppBar position="static" color="primary">
                    <Toolbar>
                        <Typography
                            className={classes.flex}
                            variant="title"
                            color="inherit"
                        >
                            SPA CRUD with React 16.3
                        </Typography>
                        <ContainedButtons
                            content=""
                            color="secondary"
                            variant="fab"
                            changeRoute={() => { this.changeRoute(); }}
                            route={this.state.route}
                        />
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}

Header.propTypes = {
    classes: PropTypes.shape({
        root: PropTypes.string.isRequired,
        flex: PropTypes.string.isRequired,
    }).isRequired,
};

export default withStyles(styles)(Header);
