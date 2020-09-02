import React from 'react';
import { Link } from 'react-router-dom';

function Test() {
  return (
    <div className='App'>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <h1>Second test page!</h1>
      <Link to='/'>Back</Link>
    </div>
  );
}

export default Test;
