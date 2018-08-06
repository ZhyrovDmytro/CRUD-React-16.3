import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { v4 as uuid } from 'uuid';

import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import Alert from 'react-s-alert';

import TextField from '../components/common/textFields/index';
import RadioButtonGroup from '../components/common/radioButtons/index';
import DatePicker from '../components/common/datePicker/index';
import ContainedButtons from '../components/common/buttons/index';

import { ROUT, PAGE } from '../constants';

import MyContext from '../context/index';

class CreateUser extends Component {
    state = {
        name: this.props.name || '',
        surname: this.props.surname || '',
        gender: this.props.gender || '',
        birthday: this.props.birthday || '',
        isStudent: this.props.isStudent || '',
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

    changeRoute = () => {
        this.setState({
            page: PAGE.MAIN,
        });
    }

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
            name,
            surname,
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

    formValidation = (context, id) => {
        this.props.correctUser ? this.correctUser(context, id) : this.addNewUser();
        context.updateUsersList();
        this.props.correctUser ? this.props.closeModal() : context.changePage();
    }

    render() {
        const {
            title,
            correctUser,
            birthday,
            closeModal,
            id,
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

        return (
            <MyContext.Consumer>
                {context => (
                    <Card>
                        <CardContent>
                            <form className="create">
                                <Typography variant="headline" component="h1">
                                    {title || 'Сreate new user'}
                                </Typography>
                                <div className="create__main-info">
                                    <TextField
                                        required
                                        name="name"
                                        label="Name"
                                        value={this.state.name}
                                        className="col-xs-12 col-md-6"
                                        error={this.state.fieldIsValid.name}
                                        errortext={this.state.errors.name}
                                        onChange={(event) => {
                                            this.handleFieldValue(event);
                                        }}
                                    />
                                    <TextField
                                        required
                                        name="surname"
                                        label="Surname"
                                        value={this.state.surname}
                                        errortext={this.state.errors.surname}
                                        className="col-xs-12 col-md-6"
                                        error={this.state.fieldIsValid.surname}
                                        onChange={(event) => {
                                            this.handleFieldValue(event);
                                        }}
                                    />
                                </div>
                                <RadioButtonGroup
                                    required
                                    formlabel="Gender"
                                    name="gender"
                                    labels={labels.gender}
                                    className="create__radio-group"
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
                                    required
                                    formlabel="Student"
                                    name="isStudent"
                                    labels={labels.isStudent}
                                    className="create__radio-group"
                                    error={this.state.fieldIsValid.isStudent}
                                    errortext={this.state.errors.isStudent}
                                    value={this.state.isStudent}
                                    onChange={(event) => {
                                        this.handleFieldValue(event);
                                    }}
                                />
                                <Grid container spacing={24} alignItems="center" justify="space-between">
                                    <ContainedButtons
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
                                        content={correctUser ? correctUserData : createUserText}
                                        color="primary"
                                        variant="contained"
                                        route={(this.state.formIsValid || correctUser) ? ROUT.MAIN : ROUT.CREATE_USER}
                                        onClick={() => {
                                            this.formValidation(context, id);
                                        }}
                                    />
                                </Grid>
                            </form>
                        </CardContent>
                    </Card>
                )}
            </MyContext.Consumer>
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
};

export default CreateUser;
