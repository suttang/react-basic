import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import App from './app';

const container = document.getElementById('app');

ReactDOM.render(
  <AppContainer>
    <App/>
  </AppContainer>,
  container,
);
