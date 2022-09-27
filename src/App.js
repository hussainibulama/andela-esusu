import React from 'react';
import './App.css';
import GameConfiguration from './components/configureGame';
const App = () => {
  return (
    <div className="App">
      <h2>Chess Game</h2>
      <GameConfiguration />
    </div>
  );
};

export default App;
