import { GlobalStyle } from "./Styles/GlobalStyle";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Providers } from "./Providers";
import { SignUpProvider } from "./Providers/SignUp";
import { RoutesComponent } from "./Routes";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Providers>
      <SignUpProvider>
        <BrowserRouter>
          <GlobalStyle />
          <RoutesComponent />
        </BrowserRouter>
      </SignUpProvider>
    </Providers>
  </React.StrictMode>
);
