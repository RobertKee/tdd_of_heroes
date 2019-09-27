import React from 'react';
import './App.css';
import Heroes from "../Heroes/Heroes";

function App() {
  const title = 'TDD of Heroes'

  return (
    <div className="App">
      <h1>{title}</h1>
        <Heroes />
    </div>
  );
}

export default App;
