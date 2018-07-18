import React from 'react';
import PropTypes from 'prop-types';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import FormHelperText from '@material-ui/core/FormHelperText';

const RadioButtonsGroup = (props) => {
    const {
        labels,
        formlabel,
        name,
        className,
        error,
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
                value={value}
                {...{ onChange }}
                {...{ onFocus }}
                {...{ formlabel }}
                {...{ name }}
                {...{ errortext }}
                className={className}
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
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func,
    onFocus: PropTypes.func,
};

export default RadioButtonsGroup;
