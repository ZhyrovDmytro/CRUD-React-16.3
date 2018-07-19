import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Grid from '@material-ui/core/Grid';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import Slide from '@material-ui/core/Slide';

import { ROUT } from '../../constants';
import ContainedButtons from '../common/buttons/index';
import CreateUser from '../CreateUser';

import MyContext from '../../context/index';

function Transition(props) {
    return <Slide direction="up" {...props} />;
}

class AlertDialogSlide extends Component {
    handleClose = (openModal) => {
        openModal();
    };

    render() {
        const {
            name,
            surname,
            gender,
            birthday,
            isStudent,
            id,
        } = this.props.user;

        const { openModal } = this.props;

        const correctDataText = (
            <span>Correct data</span>
        );

        const cancelText = (
            <span>Cancel</span>
        );

        return (
            <MyContext.Consumer>
                {context => (
                    <Dialog
                        open
                        TransitionComponent={Transition}
                        keepMounted
                        onClose={() => {
                            this.handleClose(openModal);
                        }}
                        aria-labelledby="alert-dialog-slide-title"
                        aria-describedby="alert-dialog-slide-description"
                    >
                        <DialogContent>
                            <CreateUser
                                title="Correct user information"
                                correctUser
                                name={name}
                                surname={surname}
                                gender={gender}
                                birthday={birthday}
                                isStudent={isStudent}
                                id={id}
                            />
                        </DialogContent>
                        <DialogActions>
                            <Grid container spacing={8} justify="space-around">
                                <ContainedButtons
                                    content={cancelText}
                                    color="secondary"
                                    variant="contained"
                                    route={ROUT.MAIN}
                                    onClick={() => {
                                        this.handleClose(openModal);
                                    }}
                                />
                                <ContainedButtons
                                    content={correctDataText}
                                    color="primary"
                                    variant="contained"
                                    route={ROUT.MAIN}
                                    onClick={() => {
                                        this.handleClose(openModal);
                                        context.correctUserData(id, this.props.user);
                                    }}
                                />
                            </Grid>
                        </DialogActions>
                    </Dialog>
                )}
            </MyContext.Consumer>
        );
    }
}

AlertDialogSlide.propTypes = {
    user: PropTypes.shape({
        name: PropTypes.string.isRequired,
        surname: PropTypes.string.isRequired,
        gender: PropTypes.string.isRequired,
        isStudent: PropTypes.string.isRequired,
        birthday: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired,
    }).isRequired,
    openModal: PropTypes.func.isRequired,
};

export default AlertDialogSlide;
