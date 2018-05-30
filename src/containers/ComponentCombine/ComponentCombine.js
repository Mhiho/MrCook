import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actionTypes from '../../store/actions';
import NewRecipe from './newRecipe';

class ComponentCombine extends Component {
  state={
    componentList: {}
  }


  addComponentToRecipe(index){
    const addItemToList = {
      ...this.state.componentList,
      [index]: true
    };
  this.setState({componentList: addItemToList})
  }
  unclickComponent(index) {
    const deleteItemFromList = {
      ...this.state.componentList,
      [index]: false
    }
    this.setState({componentList: deleteItemFromList})
  }
  render(){
    const recipes =   this.props.recipes.map(recipe =>(
          <p key={recipe.id}>{recipe.re}</p>
      )
    );
    console.log(this.props.recipes)
    return (
      <div>
        <form>
        { this.props.components.map((component,index)=>(
          <div key={component.id}>
          <input

            onClick={()=>this.addComponentToRecipe(component.id)}
            type="checkbox"
          />
          <label>{component.co}</label>
          </div>
        ))}
        </form>

        <NewRecipe
          clickson={this.props.addRecipe} />
        <p>Here are your recipes</p>
          {recipes}
            <p>{this.props.components.co}</p>
      </div>
    )
  }
}


function mapStateToProps(state) {
  return{
    components: state.manageComponents.components,
    recipes: state.createRecipe.recipes
  }
}

function mapDispatchToProps(dispatch) {
  return{
    addRecipe: (recipe) => dispatch({type: actionTypes.ADD_RECIPE, payload: {recipeInReducer: recipe}})
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(ComponentCombine);
