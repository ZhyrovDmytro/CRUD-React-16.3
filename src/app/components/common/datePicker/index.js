import React from 'react';
import PropTypes from 'prop-types';

import TextField from '@material-ui/core/TextField';

function DatePicker(props) {
    const { className, error } = props;

    return (
        <div className={className} noValidate >
            <TextField
                required
                label="Birthday"
                type="date"
                error={error}
                InputLabelProps={{
                    shrink: true,
                }}
            />
        </div>
    );
}

DatePicker.propTypes = {
    className: PropTypes.string.isRequired,
    error: PropTypes.bool.isRequired,
};

export default DatePicker;
