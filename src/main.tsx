import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles.css";

// Prevent browser scroll restore *before* React mounts
if (typeof window !== "undefined" && "scrollRestoration" in window.history) {
  (window.history as any).scrollRestoration = "manual";
}
// If no hash, make sure we’re at the top
if (typeof window !== "undefined" && !window.location.hash) {
  window.scrollTo(0, 0);
}

// Mount the React application to the root div
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
