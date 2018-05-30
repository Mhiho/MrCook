import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actionTypes from '../../store/actions';
import NewRecipe from './newRecipe';


class ComponentCombine extends Component {

  state = {
  changeBool: {}
  }
  changeStatusforIdHandler = (index) => {
    const itemToAdd = {
      ...this.state.changeBool,
      [index]: true
    }
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
            onChange={()=>this.props.addComToRecipe(component.toRecipe, component.id)}
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
    addRecipe: (recipe) => dispatch({type: actionTypes.ADD_RECIPE, payload: {recipeInReducer: recipe}}),
    addComToRecipe: (toRecipe, id) =>dispatch({type: actionTypes.ADD_COM_TO_RECIPE, payload: {toRecipeInReducer: toRecipe, idInReducer: id}})
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(ComponentCombine);
