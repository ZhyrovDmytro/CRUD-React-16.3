import React, { Component } from 'react';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import TextField from '../components/common/textFields/index';
import RadioButtonGroup from '../components/common/radioButtons/index';
import DatePicker from '../components/common/datePicker/index';
import ContainedButtons from '../components/common/buttons/Button';

import { ROUT, PAGE } from '../constants';

import MyContext from '../context/index';

class CreateUser extends Component {
    state = {
        name: '',
        surname: '',
        gender: '',
        birthday: '',
        isStudent: false,
        error: false,
        page: '',
    }

    handleNameValue = (value) => {
        this.setState({
            name: value,
        });
    };

    handleSurnameValue = (value) => {
        this.setState({
            surname: value,
        });
    };

    handleGenderValue = (value) => {
        this.setState({
            gender: value,
        });
    };

    handleBirthValue = (value) => {
        this.setState({
            birthday: value,
        });
    };

    handleStudentValue = (value) => {
        const isStudent = (value === 'Yes') && true;

        this.setState({
            isStudent,
        });
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

        const user = {
            name,
            surname,
            gender,
            birthday,
            isStudent,
        };

        const users = JSON.parse(localStorage.getItem('users')) || [];
        users.push(user);
        localStorage.setItem('users', JSON.stringify(users));
    };

    render() {
        const labels = {
            gender: ['Male', 'Female'],
            isStudent: ['Yes', 'No'],
        };

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
                                        label="Name"
                                        className="col-xs-12 col-md-6"
                                        error={this.state.error}
                                        inputValue={this.handleNameValue}
                                    />
                                    <TextField
                                        required
                                        label="Surname"
                                        className="col-xs-12 col-md-6"
                                        error={this.state.error}
                                        inputValue={this.handleSurnameValue}
                                    />
                                </div>
                                <RadioButtonGroup
                                    formLabel="Gender"
                                    labels={labels.gender}
                                    className="Create__radio-group"
                                    error={this.state.error}
                                    radioButtonValue={this.handleGenderValue}
                                />
                                <DatePicker
                                    className="Create__datepicker"
                                    error={this.state.error}
                                    datePickerValue={this.handleBirthValue}
                                />
                                <RadioButtonGroup
                                    formLabel="Student"
                                    labels={labels.isStudent}
                                    className="Create__radio-group"
                                    error={this.state.error}
                                    radioButtonValue={this.handleStudentValue}
                                />
                                <div className="Create__buttons-group">
                                    <ContainedButtons
                                        content="Create User"
                                        color="primary"
                                        variant="contained"
                                        changeRoute={this.handleClick}
                                        onClick={() => {
                                            this.addNewUser();
                                            context.updateUsersList();
                                            context.changePage();
                                        }}
                                        route={ROUT.MAIN}
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
