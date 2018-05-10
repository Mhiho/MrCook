import React, { Component } from 'react';
import './App.scss';
import FoodComponents from './containers/FoodComponents/FoodComponents';

class App extends Component {
  render() {
    return (
      <div className="App">
        Lets start
        <FoodComponents />
      </div>
    );
  }
}

export default App;
