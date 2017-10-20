import React, { Component } from 'react';
import './App.css';

import BarChart from './BarChart';
import WorldMap from './WorldMap';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BarChart
          data={[5,10,1,3]}
          size={[500,500]}
        />
        <hr />
        <WorldMap />
      </div>
    );
  }
}

export default App;
