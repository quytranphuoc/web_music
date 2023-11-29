import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import reduxConfig from "./redux";
import { BrowserRouter } from "react-router-dom";

const store = reduxConfig();
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    {/* <PersistGate loading={null} persistor={persistor}>
     
    </PersistGate> */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
