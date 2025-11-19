import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import ExchangeContext from "./context/ExchangeContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <ExchangeContext>
        <App />
      </ExchangeContext>
    </BrowserRouter>
  </StrictMode>
);