import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
// import {HelmetProvider} from 'react-helmet-async';
import App from './App';
import './i18n';
// import './errorReporting';

ReactDOM.render(
  // <HelmetProvider>
  <Suspense fallback="Loading...">
    <App />
  </Suspense>,
  // </HelmetProvider>,
  document.getElementById('root')
);
