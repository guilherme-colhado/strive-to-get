import { GlobalStyle } from "./Styles/GlobalStyle";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Providers } from "./Providers";
import { RoutesComponent } from "./Routes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <BrowserRouter>
    <Providers>
      <ToastContainer />
      <GlobalStyle />
      <RoutesComponent />
    </Providers>
  </BrowserRouter>
  // </React.StrictMode>
);
