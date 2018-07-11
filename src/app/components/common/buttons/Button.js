import React from 'react';

import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';

import Button from '@material-ui/core/Button';

import AddIcon from '@material-ui/icons/Add';
import HomeIcon from '@material-ui/icons/Home';

import { ROUT } from '../../../constants';

const styles = theme => ({
    button: {
        margin: theme.spacing.unit,
    },
    input: {
        display: 'none',
    },
});

function ContainedButtons(props) {
    const {
        content,
        color,
        variant,
        route,
        changeRoute,
    } = props;

    return (
        <Button
            variant={variant}
            color={color}
            aria-label="add"
            component={Link}
            to={`${route}`}
            onClick={changeRoute}
        >
            {route === ROUT.CREATE_USER ? <AddIcon /> : <HomeIcon />}
            {content}
        </Button>
    );
}

ContainedButtons.propTypes = {
    content: PropTypes.string.isRequired,
    variant: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    route: PropTypes.string.isRequired,
    changeRoute: PropTypes.func.isRequired,
};

export default withStyles(styles)(ContainedButtons);
