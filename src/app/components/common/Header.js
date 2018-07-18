import React from 'react';
import PropTypes from 'prop-types';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';
import HomeIcon from '@material-ui/icons/Home';

import MyContext from '../../context/index';

import { ROUT } from '../../constants';

import ContainedButtons from './buttons/index';


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

const Header = (props) => {
    const { classes } = props;

    const addUserIcon = (
        <AddIcon />
    );

    const homeIcon = (
        <HomeIcon />
    );

    return (
        <MyContext.Consumer>
            {context => (
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
                                content={!context.mainPage ? addUserIcon : homeIcon}
                                color="secondary"
                                variant="fab"
                                route={context.mainPage ? ROUT.MAIN : ROUT.CREATE_USER}
                                onClick={() => {
                                    context.updateUsersList();
                                    context.changePage();
                                }}
                            />
                        </Toolbar>
                    </AppBar>
                </div>
            )}
        </MyContext.Consumer>
    );
};

Header.propTypes = {
    classes: PropTypes.shape({
        root: PropTypes.string.isRequired,
        flex: PropTypes.string.isRequired,
    }).isRequired,
};

export default withStyles(styles)(Header);
