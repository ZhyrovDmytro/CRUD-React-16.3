import React, { Component } from 'react';

import { MuiThemeProvider } from '@material-ui/core';

import { theme } from './common/muiTheme';
import Header from './common/Header';

export default class Crud extends Component {
    render() {
        return (
            <MuiThemeProvider theme={theme}>
                <Header />
            </MuiThemeProvider>
        );
    }
}
