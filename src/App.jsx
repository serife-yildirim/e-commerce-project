import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import HomePage from "./Pages/HomePage";
import SignupForm from "./Pages/SignupForm";
import LoginForm from "./Pages/LoginForm";


function App() {
  return (
    <Router>
      <div>
        <Switch>
        <Route path="/signup" component={SignupForm} />
        <Route path="/login" component={LoginForm} />
          <Route exact path="/" component={HomePage} />
        </Switch>
        <ToastContainer />
      </div>
    </Router>
  );
}

export default App;
