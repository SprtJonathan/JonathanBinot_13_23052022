import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Provider } from "react-redux";
//import store from "./redux/store";
import { configureStore } from "@reduxjs/toolkit";

import "./index.css";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Homepage from "./pages/Homepage";
import Signin from "./pages/Signin";
import User from "./pages/User";
import reportWebVitals from "./reportWebVitals";

import authReducer from "./redux/reducers/AuthReducer";

const store = configureStore({
  reducer: {
    userStatus: authReducer,
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/sign-in" element={<Signin />} />
          <Route path="/user" element={<User />} />
        </Routes>
        <Footer />
      </Router>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
