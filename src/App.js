// import logo from './logo.svg';
import React from 'react';
import './App.css';
import LoginPage from './Components/LoginPage/LoginPage';
import Home from './Components/HomePage';

function App() {
  return (
    <div className="App">
      <LoginPage/>
      <Home/>
    </div>
  );
}

export default App;
