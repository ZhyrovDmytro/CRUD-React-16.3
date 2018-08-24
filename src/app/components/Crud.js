import React from 'react';

import { BrowserRouter } from 'react-router-dom';
import { MuiThemeProvider } from '@material-ui/core';

import Alert from 'react-s-alert';

import MyProvider from '../context/provider';

import { theme } from './common/muiTheme';
import Header from './common/Header';
import Main from './Main';

const Crud = () => (
    <MyProvider>
        <BrowserRouter>
            <MuiThemeProvider theme={theme}>
                <Header />
                <Main />
                <Alert
                    stack={{ limit: 3 }}
                    timeout={3000}
                    position="top-right"
                />
            </MuiThemeProvider>
        </BrowserRouter>
    </MyProvider>
);

export default Crud;
