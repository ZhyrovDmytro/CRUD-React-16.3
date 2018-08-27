import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';

const ContainedButtons = (props) => {
    const {
        content,
        color,
        variant,
        onClick,
        disabled,
        route,
        type,
    } = props;

    return (
        <Button
            {...{ color }}
            {...{ disabled }}
            {...{ type }}
            variant={variant}
            component={Link}
            to={route}
            {...{ onClick }}
        >
            {content}
        </Button>
    );
};

ContainedButtons.propTypes = {
    content: PropTypes.element.isRequired,
    variant: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    route: PropTypes.string,
    onClick: PropTypes.func,
    type: PropTypes.string,
};

ContainedButtons.defaultProps = {
    route: '',
    type: '',
    onClick: () => {},
};

export default ContainedButtons;
