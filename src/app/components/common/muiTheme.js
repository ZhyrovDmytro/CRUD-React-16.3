import { createMuiTheme } from '@material-ui/core/styles';

export const theme = createMuiTheme({
    palette: {
        primary: {
            light: '#4DB6AC',
            main: '#009688',
            dark: '#00695C',
            contrastText: '#fff',
        },
        secondary: {
            light: '#FF8A65',
            main: '#FF5722',
            dark: '#D84315',
            contrastText: '#000',
        },
    },
});
