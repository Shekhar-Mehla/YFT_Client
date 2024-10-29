import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
// bootstrap css

import "bootstrap/dist/css/bootstrap.min.css";
// react toastify css
import "react-toastify/dist/ReactToastify.css";
import { CentralstateProvider } from "./context/ContextApi.jsx";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <CentralstateProvider>
        <App></App>
      </CentralstateProvider>
    </BrowserRouter>
  </StrictMode>
);
