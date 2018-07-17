import React, { Component } from 'react';

import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';

import Button from '@material-ui/core/Button';

import AddIcon from '@material-ui/icons/Add';
import HomeIcon from '@material-ui/icons/Home';

import MyContext from '../../../context/index';

import { ROUT } from '../../../constants';

const styles = theme => ({
    button: {
        margin: theme.spacing.unit,
    },
    input: {
        display: 'none',
    },
});

class ContainedButtons extends Component {
    handleClick = (context) => {
        context.updateUsersList();
        context.changePage();
    };

    render() {
        const {
            content,
            color,
            variant,
            onClick,
        } = this.props;

        return (
            <MyContext.Consumer>
                {context => (
                    <Button
                        variant={variant}
                        color={color}
                        component={Link}
                        to={context.mainPage ? ROUT.MAIN : ROUT.CREATE_USER}
                        {...{ onClick }}
                    >
                        {(context.mainPage && !content) && <HomeIcon />}
                        {(!context.mainPage && !content) && <AddIcon />}
                        {content}
                    </Button>
                )}
            </MyContext.Consumer>
        );
    }
}

ContainedButtons.propTypes = {
    content: PropTypes.string.isRequired,
    variant: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
};

export default withStyles(styles)(ContainedButtons);
