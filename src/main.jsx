import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ChracterAnimationsProvider } from "./contexts/ChracterAnimation.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChracterAnimationsProvider>
      <App />
    </ChracterAnimationsProvider>
  </React.StrictMode>
);
