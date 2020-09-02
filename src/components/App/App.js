import React from 'react';
import logo from '../../logo.svg';
import './App.css';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <h1>Testing!</h1>
      <Link to='/test'>Link to test!</Link>
    </div>
  );
}

export default App;
