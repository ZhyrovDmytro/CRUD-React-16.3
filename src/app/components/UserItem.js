import React, { Component } from 'react';

import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import DeleteIcon from '@material-ui/icons/Delete';
import Create from '@material-ui/icons/Create';

import PropTypes from 'prop-types';

import Alert from 'react-s-alert';

import { ROUT } from '../constants';

import ModalWindow from '../components/common/Modal';
import ContainedButtons from '../components/common/buttons/index';

import MyContext from '../context/index';


class UserItem extends Component {
    state = {
        openModal: false,
    };

    delteUserMessage = () => {
        Alert.info('User deleted', {
            position: 'top-right',
            effect: 'slide',
        });
    }

    correctUser = () => {
        this.setState({
            openModal: !this.state.openModal,
        });
    }

    render() {
        const {
            name,
            surname,
            gender,
            birthday,
            isStudent,
            id,
        } = this.props.user;

        const correctUserIcon = (
            <Create />
        );

        const deleteUserIcon = (
            <DeleteIcon />
        );

        return (
            <MyContext.Consumer>
                {context => (
                    <Card elevation={3} className="create__userItem" >
                        <Grid container spacing={24} alignItems="center" justify="space-around">
                            <Grid item xs={12} sm={8} lg={10}>
                                <Typography variant="headline" component="h4">
                                    {`Name: ${name}`}
                                </Typography>
                                <Typography variant="headline" component="h4">
                                    {`Surname: ${surname}`}
                                </Typography>
                                {gender &&
                                    <Typography component="p">
                                        {`Gender: ${gender}`}
                                    </Typography>}
                                {birthday &&
                                    <Typography component="p">
                                        {`Birthday: ${birthday}`}
                                    </Typography>}
                                {isStudent &&
                                    <Typography component="p">
                                        {`Student: ${isStudent}`}
                                    </Typography>}
                            </Grid>
                            <Grid item xs={12} sm={4} lg={2} container justify="space-around">
                                <ContainedButtons
                                    content={correctUserIcon}
                                    color="primary"
                                    variant="fab"
                                    route={ROUT.MAIN}
                                    onClick={() => {
                                        this.correctUser();
                                    }}
                                />
                                <ContainedButtons
                                    content={deleteUserIcon}
                                    color="secondary"
                                    name="delete"
                                    variant="fab"
                                    route={ROUT.MAIN}
                                    onClick={() => {
                                        context.deleteUser(id);
                                        this.delteUserMessage();
                                    }}
                                />
                            </Grid>
                        </Grid>
                        {this.state.openModal &&
                            <ModalWindow
                                user={this.props.user}
                                openModal={this.correctUser}
                            />}
                    </Card>
                )}
            </MyContext.Consumer>
        );
    }
}

UserItem.propTypes = {
    user: PropTypes.shape({
        name: PropTypes.string.isRequired,
        surname: PropTypes.string.isRequired,
        gender: PropTypes.string.isRequired,
        isStudent: PropTypes.string.isRequired,
        birthday: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired,
    }).isRequired,
};

export default UserItem;
