import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';

const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    formControl: {
        margin: theme.spacing.unit,
    },
});

class TextField extends React.Component {
    state = {
        value: '',
    };

    handleChange = (event) => {
        this.setState({ value: event.target.value }, () => {
            this.props.inputValue(this.state.value);
        });
    };

    render() {
        const {
            className,
            label,
            required,
            error,
        } = this.props;

        return (
            <FormControl
                required={required}
                error={error}
                className={className}
            >
                <InputLabel htmlFor="name-simple">{label}</InputLabel>
                <Input id="name-simple" value={this.state.value} onChange={this.handleChange} />
                {error && <FormHelperText id="name-error-text">This field is required</FormHelperText>}
            </FormControl>
        );
    }
}

TextField.propTypes = {
    className: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    required: PropTypes.bool.isRequired,
    inputValue: PropTypes.func.isRequired,
    error: PropTypes.bool.isRequired,
};

export default withStyles(styles)(TextField);
