import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { LocalizationProvider } from '@mui/lab';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducers/appState';
import { createTheme, ThemeProvider } from '@mui/material';

const store = createStore(reducer);

const theme = createTheme({
  palette: {
    mode: 'dark',
  },
});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </LocalizationProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
