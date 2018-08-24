import React from 'react';
import PropTypes from 'prop-types';

import { TextValidator } from 'react-material-ui-form-validator';

const TextField = (props) => {
    const {
        className,
        label,
        required,
        errorMessages,
        name,
        onBlur,
        validators,
        value,
        onChange,
    } = props;

    return (
        <TextValidator
            id="name-simple"
            {...{ label }}
            {...{ required }}
            {...{ className }}
            {...{ onChange }}
            {...{ onBlur }}
            {...{ name }}
            {...{ value }}
            {...{ validators }}
            {...{ errorMessages }}
        />
    );
};

TextField.propTypes = {
    className: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    validators: PropTypes.arrayOf(PropTypes.string),
    value: PropTypes.string,
    required: PropTypes.bool.isRequired,
    onChange: PropTypes.func,
    onBlur: PropTypes.func,
    errorMessages: PropTypes.string.isRequired,
};

TextField.defaultProps = {
    value: '',
    validators: [''],
    onChange: () => {},
    onBlur: () => {},
};

export default TextField;
