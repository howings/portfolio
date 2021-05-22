import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import reducers from './reducers';

import App from './App';
import './index.css';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette: {
      type: "dark",
      background: {
        default: '#282828'
      },
      primary: {
        light: '#e2ffff',
        main: '#afe0d7',
        dark: '#7faea6',
        contrastText: '#000',
      },
      secondary: {
        light: '#ff8bae',
        main: '#ff577f',
        dark: '#c71853',
        contrastText: '#fff',
      },
    },
    typography: {
        fontFamily: [
          '"Open Sans"',
          'Poppins',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
        ].join(','),
        h1: {
            fontFamily: 'Open Sans',
            fontSize: '140px',
            fontWeight: 900,
            '@media (max-width:960px)': {
              fontFamily: 'Open Sans',
              fontSize: '90px',
              fontWeight: 900,
            },
            '@media (max-width:600px)': {
              fontFamily: 'Open Sans',
              fontSize: '60px',
              fontWeight: 900,
            },
        },
        subtitle1: {
            fontFamily: 'Poppins',
            fontSize: '20px',
            fontWeight: 200,
            letterSpacing: '2px',
        },
        subtitle2: {
            fontFamily: 'Poppins',
            fontSize: '16px',
            fontWeight: 400,
        },
        body1: {
            fontFamily: 'Poppins',
            fontSize: '18px',
            fontWeight: 400,
        },
        body2: {
            fontFamily: 'Poppins',
            fontSize: '16px',
            fontWeight: 200,
        },
        caption: {
            fontFamily: 'Poppins',
            fontSize: '12px',
            fontWeight: 500,
            textTransform: 'uppercase',
            margin: '10px',
            letterSpacing: '2px',
        },
        overline: {
            fontFamily: 'Poppins',
            fontSize: '11px',
            fontWeight: 400,
            textTransform: 'uppercase',
            letterSpacing: '1px',
        },
      },
  });

const store = createStore(reducers, compose(applyMiddleware(thunk)));

ReactDOM.render(
    <ThemeProvider theme={theme}>
        <Provider store={store}>
            <App />
        </Provider>,
    </ThemeProvider>,
    document.getElementById('root')
);