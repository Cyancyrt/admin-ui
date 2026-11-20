import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import PageLogin from "./Latihan/pages/PageLogin.jsx";
import PageRegister from "./Latihan/pages/PageRegister.jsx";

import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
