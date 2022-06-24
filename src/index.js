import { GlobalStyle } from './Styles/GlobalStyle';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'
import { Providers } from './Providers';
import { RoutesComponent } from './Routes';
import { ToastContainer } from 'react-toastify';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Providers>
      <BrowserRouter>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        <GlobalStyle/>
        <RoutesComponent/>
      </BrowserRouter>
    </Providers>
  </React.StrictMode>
);