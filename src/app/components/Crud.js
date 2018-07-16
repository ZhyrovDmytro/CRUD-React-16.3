import React, { Component } from 'react';

import { BrowserRouter } from 'react-router-dom';
import { MuiThemeProvider } from '@material-ui/core';

import MyProvider from '../context/provider';

import { theme } from './common/muiTheme';
import Header from './common/Header';
import Main from './Main';

export default class Crud extends Component {
    render() {
        return (
            <MyProvider>
                <BrowserRouter>
                    <MuiThemeProvider theme={theme}>
                        <Header />
                        <Main />
                    </MuiThemeProvider>
                </BrowserRouter>
            </MyProvider>
        );
    }
}
