import React from 'react';
import PropTypes from 'prop-types';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import { withStyles } from '@material-ui/core/styles';

const styles = {
    groupWrapper: {
        'flex-direction': 'row',
    },
};

const RadioButtonsGroup = (props) => {
    const {
        labels,
        formlabel,
        name,
        error,
        classes,
        value,
        onFocus,
        required,
        errortext,
        onChange,
    } = props;

    const RadioLabel = labels.map(label => (
        <FormControlLabel
            key={Math.random()}
            value={label}
            control={<Radio />}
            label={label}
        />
    ));

    return (
        <FormControl component="fieldset" error={!error} required>
            <FormLabel component="legend">{formlabel}</FormLabel>
            <RadioGroup
                aria-label={formlabel}
                {...{ onChange }}
                {...{ onFocus }}
                {...{ formlabel }}
                {...{ name }}
                {...{ value }}
                {...{ errortext }}
                className={classes.groupWrapper}
            >
                { RadioLabel }
            </RadioGroup>
            {!error && required && <FormHelperText id="name-error-text">{errortext}</FormHelperText>}
        </FormControl>
    );
};

RadioButtonsGroup.propTypes = {
    labels: PropTypes.arrayOf(PropTypes.string).isRequired,
    formlabel: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    required: PropTypes.bool.isRequired,
    className: PropTypes.string.isRequired,
    error: PropTypes.bool.isRequired,
    errortext: PropTypes.string.isRequired,
    value: PropTypes.string,
    onChange: PropTypes.func,
    onFocus: PropTypes.func,
    classes: PropTypes.shape({
        groupWrapper: PropTypes.string.isRequired,
    }).isRequired,
};

RadioButtonsGroup.defaultProps = {
    value: '',
    onChange: () => {},
    onFocus: () => {},
};

export default withStyles(styles)(RadioButtonsGroup);
