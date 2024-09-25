import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App.js";
import reportWebVitals from "./reportWebVitals.js";
import ContextWrapper from "./context/ContextWrapper.js";
import { ClerkProvider } from '@clerk/clerk-react'

const PUBLISHABLE_KEY = process.env.REACT_APP_CLERK_PUBLISHABLE_KEY;
if (!PUBLISHABLE_KEY) {
  throw new Error('Missing Publishable Key')
}
ReactDOM.render(
  <React.StrictMode>
    <ContextWrapper>
      <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
        <App />
      </ClerkProvider>
    </ContextWrapper>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
