import React, { Component } from 'react';

class NewRecipe extends Component {

  state = {
    recipe: ''
  }

  onChangeHandler = (recipe) =>{
    this.setState({recipe: recipe})
  }

  resetInputHandler = () =>{
    this.setState({recipe: ''})
  }

  render(){

    return (
      <div>
      <input
        onChange={e=>{this.onChangeHandler(e.target.value)}}
        value={this.state.recipe}
        type="text"
      />
      <button onClick={() => {this.props.clickson(this.state.recipe);
                              this.resetInputHandler()}}>
        Add recipe with chosen components
        </button>
      </div>
    )
  }
}


export default NewRecipe;
