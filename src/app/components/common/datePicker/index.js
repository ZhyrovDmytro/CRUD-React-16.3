import React from 'react';
import PropTypes from 'prop-types';

import TextField from '@material-ui/core/TextField';

const DatePicker = (props) => {
    const {
        className,
        error,
        name,
        errortext,
        onChange,
    } = props;
    return (
        <div className={className} noValidate >
            <TextField
                required
                label="Birthday"
                type="date"
                {...{ name }}
                {...{ errortext }}
                {...{ onChange }}
                error={!error}
                InputLabelProps={{
                    shrink: true,
                }}
            />
        </div>
    );
};

DatePicker.propTypes = {
    className: PropTypes.string.isRequired,
    error: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired,
    errortext: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
};

export default DatePicker;
