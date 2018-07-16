import { createMuiTheme } from '@material-ui/core/styles';

export const theme = createMuiTheme({
    palette: {
        primary: {
            light: '#5C6BC0',
            main: '#3F51B5',
            dark: '#3949AB',
            contrastText: '#fff',
        },
        secondary: {
            light: '#26A69A',
            main: '#009688',
            dark: '#00897B',
            contrastText: '#000',
        },
    },
});
