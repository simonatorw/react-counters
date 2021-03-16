import React from 'react';
import { Counter } from './Counter/Counter';
import './App.css';

function App() {
  return (
    <div className="App">
      <Counter
        initial={0}
        increment={1}
        lower={-5}
        upper={5}
      />
      <Counter
        initial={10}
        increment={5}
        lower={-25}
        upper={25}
      />
    </div>
  );
}

export default App;
