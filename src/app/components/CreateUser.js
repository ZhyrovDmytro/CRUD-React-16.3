import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { v4 as uuid } from 'uuid';
import { ValidatorForm } from 'react-material-ui-form-validator';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import Alert from 'react-s-alert';

import TextField from '../components/common/textFields/index';
import RadioButtonGroup from '../components/common/radioButtons/index';
import DatePicker from '../components/common/datePicker/index';
import ContainedButtons from '../components/common/buttons/index';

import withContext from '../HOC/Context';

import { ROUT } from '../constants';

class CreateUser extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            surname: '',
            gender: '',
            birthday: '',
            isStudent: '',
            errors: {
                name: 'This field is required!',
                surname: 'This field is required!',
                gender: 'This field is required!',
                birthday: 'This field is required!',
                isStudent: 'This field is required!',
            },
            fieldIsValid: {
                name: true,
                surname: true,
                gender: true,
                birthday: true,
                isStudent: true,
            },
            formIsValid: true,
            page: '',
            route: '',
            formData: {
                name: '',
                surname: '',
            },
            submitted: false,
        };
    }

    componentWillMount() {
        const {
            name,
            surname,
            gender,
            birthday,
            isStudent,
        } = this.props;

        this.setState({
            name,
            surname,
            gender,
            birthday,
            isStudent,
        });
    }

    onSubmit = () => {
        const { context, id } = this.props;

        this.setState({
            submitted: true,
        });

        this.props.correctUser ? this.correctUser(context, id) : this.addNewUser();
        context.updateUsersList();
        this.props.correctUser && this.props.closeModal();
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.refs.form.submit();
    }

    handleChange = (event) => {
        const { formData } = this.state;
        formData[event.target.name] = event.target.value;
        this.setState({ formData });
    }

    handleFieldValue = (event) => {
        const { target: {
            name,
            value,
        } } = event;

        this.setState({
            [name]: value,
        });
    };

    correctUser = (context, id) => {
        const selectedUser = context.users.filter(el => el.id === id);

        const {
            name,
            surname,
            gender,
            birthday,
            isStudent,
        } = this.state;

        const user = {
            name: name || selectedUser[0].name,
            surname: surname || selectedUser[0].surname,
            gender: gender || selectedUser[0].gender,
            birthday: birthday || selectedUser[0].birthday,
            isStudent: isStudent || selectedUser[0].isStudent,
            id,
        };

        context.correctUserData(user);

        Alert.info('User data was corrected!', {
            effect: 'slide',
        });
    }

    addNewUser = () => {
        const {
            formData: {
                name,
                surname,
            },
            gender,
            birthday,
            isStudent,
        } = this.state;

        const user = {
            name,
            surname,
            gender,
            birthday,
            isStudent,
            id: uuid(),
        };

        const users = JSON.parse(localStorage.getItem('users')) || [];
        users.push(user);
        localStorage.setItem('users', JSON.stringify(users));

        Alert.success('User was created!', {
            effect: 'slide',
        });
    };

    render() {
        const {
            title,
            correctUser,
            birthday,
            closeModal,
            context,
        } = this.props;

        const labels = {
            gender: ['Male', 'Female'],
            isStudent: ['Yes', 'No'],
        };

        const createUserText = (
            <span>Create User</span>
        );

        const cancelText = (
            <span>Cancel</span>
        );

        const correctUserData = (
            <span>Correct user</span>
        );

        const { formData } = this.state;

        return (
            <ValidatorForm
                className="create"
                ref="form"
                onSubmit={this.onSubmit}
            >
                <Card>
                    <CardContent>
                        <Typography variant="headline" component="h1">
                            {title || 'Create new user'}
                        </Typography>
                        <div className="create__main-info">
                            <TextField
                                required
                                name="name"
                                label="Name"
                                value={formData.name}
                                className="col-xs-12 col-md-6"
                                validators={['required']}
                                errorMessages={this.state.errors.name}
                                onChange={this.handleChange}
                            />
                            <TextField
                                required
                                name="surname"
                                label="Surname"
                                value={formData.surname}
                                className="col-xs-12 col-md-6"
                                validators={['required']}
                                errorMessages={this.state.errors.surname}
                                onChange={this.handleChange}
                            />
                        </div>
                        <RadioButtonGroup
                            formlabel="Gender"
                            name="gender"
                            labels={labels.gender}
                            error={this.state.fieldIsValid.gender}
                            errortext={this.state.errors.gender}
                            value={this.state.gender}
                            onChange={(event) => {
                                this.handleFieldValue(event);
                            }}
                        />
                        <DatePicker
                            className="create__datepicker"
                            name="birthday"
                            defaultValue={birthday}
                            error={this.state.fieldIsValid.birthday}
                            errortext={this.state.errors.birthday}
                            onChange={(event) => {
                                this.handleFieldValue(event);
                            }}
                        />
                        <RadioButtonGroup
                            formlabel="Student"
                            name="isStudent"
                            labels={labels.isStudent}
                            error={this.state.fieldIsValid.isStudent}
                            errortext={this.state.errors.isStudent}
                            value={this.state.isStudent}
                            onChange={(event) => {
                                this.handleFieldValue(event);
                            }}
                        />
                        <Grid container spacing={24} alignItems="center" justify="space-between">
                            <ContainedButtons
                                type="reset"
                                content={cancelText}
                                color="secondary"
                                variant="contained"
                                route={ROUT.MAIN}
                                onClick={() => {
                                    correctUser ? closeModal() :
                                        context.changePage();
                                }}
                            />
                            <ContainedButtons
                                type="submit"
                                content={correctUser ? correctUserData : createUserText}
                                color="primary"
                                variant="contained"
                                route={(this.state.formIsValid || correctUser) ? ROUT.MAIN : ROUT.CREATE_USER}
                                onClick={this.handleSubmit}
                            />
                        </Grid>
                    </CardContent>
                </Card>
            </ValidatorForm>

        );
    }
}

CreateUser.propTypes = {
    name: PropTypes.string,
    surname: PropTypes.string,
    gender: PropTypes.string,
    isStudent: PropTypes.string,
    birthday: PropTypes.string,
    id: PropTypes.string,
    title: PropTypes.string,
    correctUser: PropTypes.bool,
    closeModal: PropTypes.func,
    context: PropTypes.shape({
        changePage: PropTypes.func.isRequired,
        correctUserData: PropTypes.func.isRequired,
        deleteUser: PropTypes.func.isRequired,
        updateUsersList: PropTypes.func.isRequired,
        users: PropTypes.arrayOf(PropTypes.string),
    }).isRequired,
};

CreateUser.defaultProps = {
    name: '',
    surname: '',
    gender: '',
    isStudent: '',
    birthday: '',
    id: '',
    title: '',
    correctUser: false,
    users: [],
    closeModal: () => {},
};

export default withContext(CreateUser);
