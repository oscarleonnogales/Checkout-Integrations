import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <PayPalScriptProvider
      options={{
        "client-id":
          "AW7fYm-VUM8LqwmpJo0emq7-XRGcBRYSGlu6mN7aIbnPFpA8TAw-fgio7xqG9FkjyKaBHDhRYNVnAOdt",
      }}
    >
      <App />
    </PayPalScriptProvider>
  </React.StrictMode>
);
