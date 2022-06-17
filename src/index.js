import { GlobalStyle } from './Styles/GlobalStyle';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'
import { Providers } from './Providers';
import { RoutesComponent } from './Routes';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Providers>
      <BrowserRouter>
        <GlobalStyle/>
        <RoutesComponent/>
      </BrowserRouter>
    </Providers>
  </React.StrictMode>
);