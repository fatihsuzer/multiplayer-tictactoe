import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "react-toastify/dist/ReactToastify.css";
import App from "./App";
import {Provider} from "react-redux";
import {ToastContainer} from "react-toastify";
import store from "./redux";

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
      <ToastContainer
        position="bottom-center"
        autoClose={2700}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover={false}
      />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);
