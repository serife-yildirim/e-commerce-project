import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "./layout/Header";
import HomePage from "./Pages/HomePage";

function App() {
  return (
    <Router>
      <Header />
      <div>
        <Switch>
          <Route exact path="/" component={HomePage} />
        </Switch>
        <ToastContainer />
      </div>
    </Router>
  );
}

export default App;
