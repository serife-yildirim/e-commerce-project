import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './layout/Header'
import Category from './components/Category' 
import Slider from './components/Slider' 


function App() {
  return (
    <Router>
      <Header />
      <div>
        <Switch>
           <Route exact path="/">
              <Slider />
              <Category />
          </Route>
        </Switch>
        <ToastContainer />
      </div>
    </Router>
  );
}

export default App;
