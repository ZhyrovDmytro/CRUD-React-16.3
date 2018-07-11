import React from 'react';

import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';

import Button from '@material-ui/core/Button';

import AddIcon from '@material-ui/icons/Add';

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
        link,
        color,
        variant,
    } = props;

    return (
        <Button
            variant={variant}
            href={link}
            color={color}
            aria-label="add"
        >
            <AddIcon />
            {content}
        </Button>
    );
}

ContainedButtons.propTypes = {
    content: PropTypes.string.isRequired,
    variant: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
};

export default withStyles(styles)(ContainedButtons);
