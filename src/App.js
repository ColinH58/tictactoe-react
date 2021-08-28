import React from 'react';
import { useState } from 'react';
import './index.css';
import Board from './components/Board';

function App() {

  return (
    <div className="App">
        <h1 className="header">Tic Tac Toe!</h1>
        <Board />
    </div>
  );
}

export default App;