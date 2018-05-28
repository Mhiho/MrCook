import React, { Component } from 'react';
import './App.scss';
import FoodComponents from './containers/FoodComponents/FoodComponents';
import {Link} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        Lets start
        <FoodComponents />
        <Link to={'/newRecipe/'}>And now compile the components</Link>
      </div>
    );
  }
}

export default App;
