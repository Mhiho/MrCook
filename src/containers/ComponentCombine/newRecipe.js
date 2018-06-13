import React, { Component } from 'react';
import {connect} from 'react-redux';


class NewRecipe extends Component {

  state = {
    recipe: ''
  }

  onChangeHandler = (recipe) =>{
    this.setState({recipe})
  }

  resetInputHandler = () =>{
    this.setState({recipe: ''})
  }

  render(){
    const compons = this.props.components ?
    this.props.components
    : null;
    return (
      <div>
      <input
        onChange={e=>{this.onChangeHandler(e.target.value)}}
        value={this.state.recipe}
        type="text"
      />
      <button
        className="btn-success"
        onClick={() => {this.props.clickson(this.state.recipe, compons),
                              this.resetInputHandler()}}>
        Add recipe with chosen components
        </button>
      </div>
    )
  }
}
function mapStateToProps(state){
  return{
    components: state.manageComponents.components
  }
}

export default connect(mapStateToProps)(NewRecipe);
