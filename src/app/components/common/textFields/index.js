import React from 'react';
import PropTypes from 'prop-types';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';

const TextField = (props) => {
    const {
        className,
        label,
        required,
        error,
        errortext,
        name,
        onBlur,
        value,
        onChange,
    } = props;

    return (
        <FormControl
            {...{ required }}
            {...{ className }}
            error={!error}
        >
            <InputLabel htmlFor="name-simple">{label}</InputLabel>
            <Input
                id="name-simple"
                {...{ onChange }}
                {...{ onBlur }}
                {...{ name }}
                {...{ value }}
                {...{ errortext }}
            />
            {!error && required && <FormHelperText id="name-error-text">{errortext}</FormHelperText>}
        </FormControl>
    );
};

TextField.propTypes = {
    className: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.string,
    required: PropTypes.bool.isRequired,
    onChange: PropTypes.func,
    onBlur: PropTypes.func,
    error: PropTypes.bool.isRequired,
    errortext: PropTypes.string.isRequired,
};

TextField.defaultProps = {
    value: '',
    onChange: () => {},
    onBlur: () => {},
};

export default TextField;
