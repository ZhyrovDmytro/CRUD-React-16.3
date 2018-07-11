import { createMuiTheme } from '@material-ui/core/styles';

export const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#0277bd',
            light: '#58a5f0',
            dark: '#004c8c',
            contrastText: '#fff',
        },
        secondary: {
            main: '#00838f',
            light: '#4fb3bf',
            dark: '#005662',
            contrastText: '#fff',
        },
    },
});
