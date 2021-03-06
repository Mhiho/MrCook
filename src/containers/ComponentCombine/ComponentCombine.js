import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actionTypes from '../../store/actions';
import NewRecipe from './newRecipe';
import RecipeList from './RecipeList';
import _ from 'lodash';
import {Link} from 'react-router-dom';

class ComponentCombine extends Component {

  render(){
    return (
      <div>
        <form>
        { _.map(this.props.components, (component,index)=>(
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
          <RecipeList />
        <div>
          <Link to= {'/SearchBar/'}>If You want serch between created recipes.</Link>
        </div>
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
    addRecipe: (recipe,comps) => dispatch({type: actionTypes.ADD_RECIPE, payload: {recipeInReducer: recipe, compsInReducer: comps}}),
    addComToRecipe: (toRecipe, id) => dispatch({type: actionTypes.ADD_COM_TO_RECIPE, payload: {toRecipeInReducer: toRecipe, idInReducer: id}})
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(ComponentCombine);
