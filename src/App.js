import React, { Component } from 'react';

import Counter from './Containers/Counter/Counter';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
       <Counter />
      </div>
    );
  }
}

export default App;
