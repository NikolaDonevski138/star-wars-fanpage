import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { CssVarsProvider } from '@mui/joy';
import { extendTheme } from '@mui/joy'

const stripePromise = loadStripe('pk_test_51H9nWJFbaEPEGgwiSNVb1aXCSm21g1ggTPXKpcarnd8nixswzXgqNGh6Hntg9S6mUmQfCquyulNZcoSyZ1mYfkSD00eIVchVhT')

const swTheme = extendTheme({ fontFamily: { body: 'Lato' } })

ReactDOM.render(
  <React.StrictMode>
    <CssVarsProvider theme={swTheme} defaultMode='dark'>
      <Elements stripe={stripePromise}>
        <App />
      </Elements>
    </CssVarsProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
