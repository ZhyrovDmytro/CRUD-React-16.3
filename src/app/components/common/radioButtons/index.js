import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import FormHelperText from '@material-ui/core/FormHelperText';

const styles = theme => ({
    root: {
        display: 'flex',
    },
    formControl: {
        margin: theme.spacing.unit * 3,
    },
    group: {
        margin: `${theme.spacing.unit}px 0`,
    },
});

class RadioButtonsGroup extends React.Component {
    state = {
        value: '',
    };

    handleChange = (event) => {
        this.setState({ value: event.target.value }, () => {
            this.props.radioButtonValue(this.state.value);
        });
    };

    render() {
        const {
            labels,
            formLabel,
            className,
            error,
        } = this.props;

        const RadioLabel = labels.map(label => (
            <FormControlLabel
                key={Math.random()}
                value={label}
                control={<Radio />}
                label={label}
            />
        ));

        return (
            <FormControl component="fieldset" error={error} required>
                <FormLabel component="legend">{formLabel}</FormLabel>
                <RadioGroup
                    aria-label={formLabel}
                    name={formLabel}
                    value={this.state.value}
                    onChange={this.handleChange}
                    className={className}
                >
                    { RadioLabel }
                </RadioGroup>
                {error && <FormHelperText id="name-error-text">This field is required</FormHelperText>}
            </FormControl>
        );
    }
}

RadioButtonsGroup.propTypes = {
    labels: PropTypes.arrayOf(PropTypes.string).isRequired,
    formLabel: PropTypes.string.isRequired,
    className: PropTypes.string.isRequired,
    error: PropTypes.bool.isRequired,
    radioButtonValue: PropTypes.func.isRequired,
};

export default withStyles(styles)(RadioButtonsGroup);
