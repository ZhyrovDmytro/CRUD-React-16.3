import React, { Component } from 'react';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import TextField from '../components/common/textFields/index';
import RadioButtonGroup from '../components/common/radioButtons/index';
import DatePicker from '../components/common/datePicker/index';
import ContainedButtons from '../components/common/buttons/index';

import { ROUT, PAGE } from '../constants';

import MyContext from '../context/index';

class CreateUser extends Component {
    state = {
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
    }

    handleFieldValue = (event) => {
        const fieldName = event.target.name;
        const fieldValue = event.target.value;

        switch (fieldName) {
            case 'name':
                this.setState({
                    name: fieldValue,
                });
                break;
            case 'surname':
                this.setState({
                    surname: fieldValue,
                });
                break;
            case 'gender':
                this.setState({
                    gender: fieldValue,
                });
                break;
            case 'student':
                this.setState({
                    isStudent: fieldValue,
                });
                break;
            case 'birthday':
                this.setState({
                    birthday: fieldValue,
                });
                break;
            default:
                break;
        }
    };

    changeRoute = () => {
        this.setState({
            page: PAGE.MAIN,
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

        const userId = (+new Date()).toString(36).slice(-7);

        const user = {
            name,
            surname,
            gender,
            birthday,
            isStudent,
            id: userId,
        };

        const users = JSON.parse(localStorage.getItem('users')) || [];
        users.push(user);
        localStorage.setItem('users', JSON.stringify(users));
    };

    formValidation = (context) => {
        this.addNewUser();
        context.updateUsersList();
        context.changePage();
    }

    render() {
        const labels = {
            gender: ['Male', 'Female'],
            isStudent: ['Yes', 'No'],
        };

        const createUserText = (
            <span>Create User</span>
        );

        return (
            <MyContext.Consumer>
                {context => (
                    <Card>
                        <CardContent>
                            <form className="Create">
                                <Typography variant="headline" component="h1">
                                    Create new user
                                </Typography>
                                <div className="Create__main-info">
                                    <TextField
                                        required
                                        name="name"
                                        label="Name"
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
                                    className="Create__radio-group"
                                    error={this.state.fieldIsValid.gender}
                                    errortext={this.state.errors.gender}
                                    value={this.state.gender}
                                    onChange={(event) => {
                                        this.handleFieldValue(event);
                                    }}
                                />
                                <DatePicker
                                    className="Create__datepicker"
                                    name="birthday"
                                    error={this.state.fieldIsValid.birthday}
                                    errortext={this.state.errors.birthday}
                                    onChange={(event) => {
                                        this.handleFieldValue(event);
                                    }}
                                />
                                <RadioButtonGroup
                                    required
                                    formlabel="Student"
                                    name="student"
                                    labels={labels.isStudent}
                                    className="Create__radio-group"
                                    error={this.state.fieldIsValid.isStudent}
                                    errortext={this.state.errors.isStudent}
                                    value={this.state.isStudent}
                                    onChange={(event) => {
                                        this.handleFieldValue(event);
                                    }}
                                />
                                <div className="Create__buttons-group">
                                    <ContainedButtons
                                        content={createUserText}
                                        color="primary"
                                        variant="contained"
                                        route={this.state.formIsValid ? ROUT.MAIN : ROUT.CREATE_USER}
                                        onClick={() => {
                                            this.formValidation(context);
                                        }}
                                    />
                                </div>
                            </form>
                        </CardContent>
                    </Card>
                )}
            </MyContext.Consumer>
        );
    }
}

export default CreateUser;
