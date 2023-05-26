import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import ThemedSuspense from "./ThemedSuspense";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Suspense fallback={<ThemedSuspense />}>
      <App />
    </Suspense>
  </React.StrictMode>
);
