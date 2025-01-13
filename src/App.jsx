import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Home = () => {
  // Örnek bir bildirim gösteren fonksiyon
  const showToast = () => {
    toast.success('Welcome to the Home Page!', {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 3000,
    });
  };

  return (
    <div>
      <h1>Home Page</h1>
      <button onClick={showToast}>Show Toast</button> {/* Bildirim butonu */}
    </div>
  );
};
const About = () => <div>About Page</div>;

function App() {
  return (
    <Router>
      <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
      </Switch>
      <ToastContainer /> {/* ToastContainer'ı uygulamanın kök bileşenine ekleyin */}
      </div>
    </Router>
  );
}

export default App;
