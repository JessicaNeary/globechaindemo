import React from 'react';
import Products from "./Products";
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Products />
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
