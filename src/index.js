import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {transitions,positions,Provider as AlertProvider} from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'
import { SessionProvider } from 'hooks/Session';

const options = {
  position: positions.TOP_RIGHT,
  timeout: 5000,
  offset: '10px',
  transition: transitions.FADE,
}

ReactDOM.render(
  <React.StrictMode>
    <SessionProvider>
    <AlertProvider template={AlertTemplate} {...options}>
      <App />
    </AlertProvider>
    </SessionProvider>
  </React.StrictMode>,
  document.getElementById('root')
);