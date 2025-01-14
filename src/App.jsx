import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './layout/Header'


function App() {
  return (
    <Router>
      <Header />
      <div>
        <Switch>
        
        
        </Switch>
        <ToastContainer />
      </div>
    </Router>
  );
}

export default App;
