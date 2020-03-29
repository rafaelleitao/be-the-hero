import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Lansei a braba <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRBijxArZIwZYtm-eOs5tEFU26Qs_PxxkHUj81TDXl8q6rnvkmq"/>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
