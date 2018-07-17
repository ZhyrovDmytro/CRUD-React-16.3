import React, { Component } from 'react';
import PropTypes from 'prop-types';

import TextField from '@material-ui/core/TextField';

class DatePicker extends Component {
    state= {
        value: '',
    }

    handleChange = (event) => {
        this.setState({ value: event.target.value }, () => {
            this.props.datePickerValue(this.state.value);
        });
    };

    render() {
        const { className, error } = this.props;
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
                    onChange={this.handleChange}
                />
            </div>
        );
    }
}

DatePicker.propTypes = {
    className: PropTypes.string.isRequired,
    error: PropTypes.bool.isRequired,
    datePickerValue: PropTypes.func.isRequired,
};

export default DatePicker;
