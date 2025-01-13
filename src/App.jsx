import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Home = () => {
  // Örnek bir bildirim gösteren fonksiyon
  const showToast = () => {
    toast.success('Welcome to the Home Page!', {
      position: 'top-right', // Doğrudan dize kullanıyoruz
      autoClose: 3000,
    });
  };

  return (
    <div className="bg-blue-500 min-h-screen flex flex-col items-center justify-center text-white">
      <h1 className="text-4xl font-bold mb-4">Welcome to the Home Page</h1>
      <button
        onClick={showToast}
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
      >
        Show Toast
      </button>
    </div>
  );
};

const About = () => (
  <div className="bg-gray-100 min-h-screen flex items-center justify-center">
    <h1 className="text-4xl">About Page</h1>
  </div>
);

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
        </Switch>
        <ToastContainer />
      </div>
    </Router>
  );
}

export default App;
