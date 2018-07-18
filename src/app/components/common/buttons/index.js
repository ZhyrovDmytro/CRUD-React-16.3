import React, { Component } from 'react';

import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';

import Button from '@material-ui/core/Button';

const styles = theme => ({
    button: {
        margin: theme.spacing.unit,
    },
    input: {
        display: 'none',
    },
});

class ContainedButtons extends Component {
    render() {
        const {
            content,
            color,
            variant,
            onClick,
            route,
        } = this.props;

        return (
            <Button
                variant={variant}
                color={color}
                component={Link}
                to={route}
                {...{ onClick }}
            >
                {content}
            </Button>
        );
    }
}

ContainedButtons.propTypes = {
    content: PropTypes.element.isRequired,
    variant: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    route: PropTypes.string,
    onClick: PropTypes.func,
};

export default withStyles(styles)(ContainedButtons);
